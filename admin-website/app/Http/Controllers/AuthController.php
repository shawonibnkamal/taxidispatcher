<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; 
use Illuminate\Support\Facades\Auth;
use \Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $rules = [
            'first_name'=>'required',
            'last_name'=>'required',
            'email'=>'required|email|unique:users',
            'password'=>'required|confirmed',
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'error' => 'Fields incomplete.',
                'error_list' => $validator->errors()
        ], 400);
        }

        $user = new User;
        $user->password = bcrypt($request->password);
        $user->email = $request->email;
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->save();
        
        $accessToken = $user->createToken(env('APP_NAME'))->accessToken;

        return response()->json(['user'=>$user, 'access_token'=>$accessToken], 200);
    }

    public function login(Request $request)
    {
        $rules = [
            'email' => 'required|exists:users',
            'password'  => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'error' => 'Invalid credentials.',
                'error_list' => $validator->errors()
        ], 400);
        }

        $data = [
            'email' => $request->get('email'),
            'password'  =>  $request->get('password'),
        ];

        if(Auth::attempt($data))
        {
            $user = Auth::user();
            // the $user->createToken('appName')->accessToken generates the JWT token that we can use 
            return response()->json([
                'user'  =>  $user, // <- we're sending the user info for frontend usage
                'token' =>  $user->createToken(env('APP_NAME'))->accessToken // <- token is generated and sent back to the front end
            ]);
        }
        else
        {
            return response()->json('Unauthorized', 401);
        }

    }
}
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;
use App\Category;

class PageController extends Controller
{
    public function index(){
        $posts = Post::with('category')->with('tags')->paginate(3);
        return response()->json($posts) ;
    }
}

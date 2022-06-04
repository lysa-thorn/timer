<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cagetory;

class CagetoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $category = Cagetory::all();
        return response()->json([
            'status' => 'success',
            'categories' => $category,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $category = Cagetory::create([
            'name' => $request->name,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'category created successfully',
            'category' => $category,
        ]);
    }

    public function show($id)
    {
        $category = Cagetory::find($id);
        return response()->json([
            'status' => 'success',
            'category' => $category,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $category = Cagetory::find($id);
        $category->name = $request->name;
        $category->save();

        return response()->json([
            'status' => 'success',
            'message' => 'category updated successfully',
            'category' => $category,
        ]);
    }

    public function destroy($id)
    {
        $category = Cagetory::find($id);
        $category->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'category deleted successfully',
            'category' => $category,
        ]);
    }
}

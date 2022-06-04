<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $products = Product::all();
        return response()->json([
            'status' => 'success',
            'products' => $products,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required',
            'image' => 'required',
            'description' => 'required',
            'category_id' => 'required',
        ]);

        $product = Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'image' => $request->image,
            'description' => $request->description,
            'category_id' =>  $request->category_id
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Product created successfully',
            'product' => $product,
        ]);
    }

    public function show($id)
    {
        $product = Product::find($id);
        return response()->json([
            'status' => 'success',
            'product' => $product,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required',
            'image' => 'required',
            'description' => 'required',
        ]);

        $product = Product::find($id);
        $product->name = $request->name;
        $product->price = $request->price;
        $product->image = $request->image;
        $product->description = $request->description;
        $product->category_id = $request->category_id;
        $product->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Product updated successfully',
            'product' => $product,
        ]);
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Product deleted successfully',
            'product' => $product,
        ]);
    }
}

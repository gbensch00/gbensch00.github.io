<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\Category;

class FrontendController extends Controller
{
    public function home()
    {
        $categories = Category::all();
        $products = Product::all();
        return view('frontend.index', compact('categories', 'products'));
    }
    public function products($category_slug)
    {

        $category = Category::where('slug', $category_slug)->first();
        if ($category) {
            $products = $category->products()->get();
            return view('frontend.byCategory', compact('products', 'category'));
        } else {
            return redirect()->back();
        }
    }
    public function productPage($category_slug, $product_id)
    {

        $category = Category::where('slug', $category_slug)->first();
        if ($category) {
            $product = $category->products()->where('id', $product_id)->first();
            if ($product) {
                $inputValue = Request()->input('inputQuantity');
                return view('frontend.productPage', compact('product', 'category', 'inputValue'));
            }
        } else {
            return redirect()->back();
        }
    }
}
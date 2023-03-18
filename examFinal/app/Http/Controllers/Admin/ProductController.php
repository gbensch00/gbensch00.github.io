<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Brand;
use App\Models\ProductImage;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Requests\ProductFormRequest;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class ProductController extends Controller
{

    public function index()
    {

        return view('admin.products.index');
    }

    public function productImages()
    {
        return $this->hasMany(ProductImage::class, 'product_id', 'id');
    }

    public function create()
    {
        $categories = Category::all();
        $brands = Brand::all();
        return view('admin.products.create', compact('categories', 'brands'));

    }



    public function store(ProductFormRequest $request)
    {
        $validatedData = $request->validated();

        $category = Category::find($validatedData['category_id']);

        $product = $category->products()->create([
            'category_id' => $validatedData['category_id'],
            'name' => $validatedData['name'],
            'slug' => Str::slug($validatedData['slug']),
            'brand_id' => $validatedData['brand_id'],
            'description' => $validatedData['description'],
            'price' => $validatedData['price'],
            'quantity' => $validatedData['quantity'],
        ]);

        $uploadPath = 'uploads/products/';
        if ($request->hasFile('image')) {


            foreach ($request->file('image') as $imageFile) {
                $extension = $imageFile->getClientOriginalExtension();
                $filename = time() . '.' . $extension;
                $imageFile->move($uploadPath, $filename);
                $imgPath = $uploadPath . $filename;

                $product->productImages()->create([
                    'product_id' => $product->id,
                    'image' => $imgPath,
                ]);
            }
        }


        $product->save();
        return redirect('admin/dashboard')->with('message', 'Product added successfully');
    }

    public function destroy(int $product_id)
    {
        $product = Product::findOrFail($product_id);
        if ($product->productImages()) {
            foreach ($product->productImages() as $image) {
                if (File::exists($image->image)) {
                    File::delete($image->image);
                }
            }
        }
        $product->delete();
        return redirect()->back()->with('message', 'Product Deleted');
    }


    //Ausprobiert aber nicht implementiert
    public function edit(int $product_id)
    {
        $categories = Category::all();
        $brands = Brand::all();
        $product = Product::find($product_id);
        return view('admin.products.edit', compact('categories', 'brands', 'product'));
    }

    public function update(ProductFormRequest $request, int $product_id)
    {

        $validatedData = $request->validated();
        $product = Category::find($validatedData['category_id'])->product()->where('id', $product_id)->first();

        if ($product) {
            $product->update([
                'name' => $validatedData['name'],
                'slug' => Str::slug($validatedData['slug']),
                'description' => $validatedData['description'],
                'price' => $validatedData['price'],
                'quantity' => $validatedData['quantity'],
            ]);

            return redirect('admin/dashboard')->with('message', 'Success!');
        } else {
            return redirect('admin/dashboard')->with('message', 'No such Product Id found');
        }
    }



}
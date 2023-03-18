<?php

namespace App\Http\Livewire\Admin\Category;

use Livewire\Component;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Livewire\WithPagination;

class Index extends Component
{
    //Seitennummerierung
    use WithPagination;
    protected $paginationTheme = 'Bootstrap';
    public function render()
    {

        $products = Product::orderBy('id', 'DESC')->paginate();
        $brands = Brand::orderBy('id', 'DESC')->paginate();
        $categories = Category::orderBy('id', 'DESC')->paginate();
        return view('livewire.admin.category.index', ['categories' => $categories, 'brands' => $brands, 'products' => $products]);
    }
}

<?php

namespace App\Models;

use App\Models\ProductImage;
use App\Models\Category;
use App\Models\Brand;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'category_id',
        'brand_id',
        'name',
        'slug',
        
        'description',
        'price',
        'quantity',
    ];

    public function productImages() {
        return $this->hasMany(ProductImage::class, 'product_id', 'id');
    }

    public function category() {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }
    public function brand() {
        return $this->belongsTo(Brand::class, 'brand_id', 'id');
    }
    
}
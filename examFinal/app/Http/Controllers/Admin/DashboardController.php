<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Cashier\Cashier;
use App\Models\User;

class DashboardController extends Controller
{
    public function index() {
        
        return view('admin.dashboard' );
    }
}

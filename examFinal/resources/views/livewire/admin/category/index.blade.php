  @if (session('message'))
      <div class="alert alert-success" role="alert">{{ session('message') }}</div>
  @endif

  <div class="card-header">
      <h4>Product
          <a href="{{ url('admin/product/create') }}" class="btn btn-primary btn-sm float-end">Add Product</a>
      </h4>
      <div class="card-body">
          <table class="table table-bordered table-striped">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Brand</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  @forelse($products as $product)
                      <tr>
                          <td> {{ $product->id }}</td>
                          <td> {{ $product->name }} </td>
                          <td>
                              @if ($product->category)
                                  {{ $product->category->name }}
                              @else
                              @endif
                          </td>
                          <td>
                              @if ($product->brand)
                                  {{ $product->brand->name }}
                              @else
                              @endif
                          </td>
                          <td>

                              <a href="{{ url('admin/product/' . $product->id . '/delete') }}"
                                  onclick="return confirm('are you sure you want to delete this product?')"
                                  class="btn btn-danger">Delete</a>
                              <a href="#" class="btn btn-success">Purchase</a>
                          </td>
                      </tr>
                  @endforeach
              </tbody>
          </table>
          {{ $products->links() }}
      </div>
  </div>
  <div>
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header">
                      <h4>Category
                          <a href="{{ url('admin/category/create') }}" class="btn btn-primary btn-sm float-end">Add
                              Category</a>
                      </h4>

                      <div class="card-body">
                          <table class="table table-bordered table-striped">
                              <thead>
                                  <tr>
                                      <th>ID</th>
                                      <th>Name</th>
                                      <th>Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  @foreach ($categories as $category)
                                      <tr>
                                          <td> {{ $category->id }}</td>
                                          <td> {{ $category->name }} </td>
                                          <td>
                                              <a href="#" class="btn btn-success">Edit</a>
                                              <a href="#" class="btn btn-danger">Delete</a>
                                          </td>
                                      </tr>
                                  @endforeach
                              </tbody>
                          </table>
                          {{ $categories->links() }}
                      </div>
                  </div>


                  <div class="card-header">
                      <h4>Brand
                          <a href="{{ url('admin/brand/create') }}" class="btn btn-primary btn-sm float-end">Add
                              Brand</a>
                      </h4>
                      <div class="card-body">
                          <table class="table table-bordered table-striped">
                              <thead>
                                  <tr>
                                      <th>ID</th>
                                      <th>Name</th>
                                      <th>Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  @foreach ($brands as $brand)
                                      <tr>
                                          <td> {{ $brand->id }}</td>
                                          <td> {{ $brand->name }} </td>
                                          <td>
                                              <a href="#" class="btn btn-success">Edit</a>
                                              <a href="#" class="btn btn-danger">Delete</a>
                                          </td>
                                      </tr>
                                  @endforeach
                              </tbody>
                          </table>
                          {{ $brands->links() }}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

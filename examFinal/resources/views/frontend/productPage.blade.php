@extends('layouts.app')



@section('content')
<!-- HTML Template: https://github.com/startbootstrap/startbootstrap-shop-item -->


 <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">

                   @if ($product->productImages->count() > 0)
                    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="{{ asset(''.$product->productImages[0]->image) }}" alt="..." /></div>
                    @endif
                    <div class="col-md-6">
                        <h1 class="display-5 fw-bolder">{{$product->brand->name}} {{$product->name}}</h1>
                        <div class="fs-5 mb-5">
                            <span >{{$product->price}}€</span>
                            @if($product->quantity > 0)
                            <span class=" text-success">Sofort Lieferbar</span>
                            @else 
                            <span class=" text-danger">Nicht Verfügbar</span>
                            @endif
                        </div>
                        <p class="lead">{{$product->description}}</p>
                        <div class="d-flex">
                            <!-- <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" />
                    
                           
                                
                            </button>-->
                            @if($product->quantity > 0)
                           
                         <div id="paypal-button-container"> <button class="" type="button" style="visibility:hidden;" ></div>
                    
                        <a href="{{ route('login') }}" class="text-sm text-gray-700 nav-link dark:text-gray-500 underline">Log in</a>
                        <a href="{{route('register')}}" class="text-sm text-gray-700 nav-link dark:text-gray-500 underline">Register</a>
                            
                        </div> 
                        @endif
                    </div>
                </div>
            </div>
        </section>

       
        <script src="https://www.paypal.com/sdk/js?client-id=AcyU4A_E7G_sX0n_hgkbdjsiW4X_uGQBDmxEcD_msNaewlPh9s-CEH6YY0GGc3yKFK_O6nouqOIvb0br&currency=EUR"></script>
        <!-- Set up a container element for the button -->

  

        <!-- Paypal Skript -->
  <script>

    paypal.Buttons({

      // Sets up the transaction when a payment button is clicked

      createOrder: (data, actions) => {

        return actions.order.create({

          purchase_units: [{

            amount: {

              value: '{{$product->price}}'  // Can also reference a variable or function

            }

          }]

        });

      },

      // Finalize the transaction after payer approval

      onApprove: (data, actions) => {

        return actions.order.capture().then(function(orderData) {

          // Successful capture! For dev/demo purposes:

         //
         
          
          actions.redirect('http://127.0.0.1:8000/home');
          const transaction = orderData.purchase_units[0].payments.captures[0];
         console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
 alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
       
         

        

          // When ready to go live, remove the alert and show a success message within this page. For example:

          // const element = document.getElementById('paypal-button-container');

          // element.innerHTML = '<h3>Thank you for your payment!</h3>';

          // Or go to another URL:  actions.redirect('/home');

        });

      }

    }).render('#paypal-button-container');

  </script>

    
@endsection

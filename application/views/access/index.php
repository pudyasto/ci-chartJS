
<div class="row justify-content-center">
    <div class="col-md-5">
        <div class="card-group">
            <div class="card p-12">
                <?php
                    $attributes = array(
                        'id' => 'form_login'
                        , 'name' => 'form_login');
                    echo form_open('access/login',$attributes); 
                ?>
                <div class="card-body">
                    <h1>Login</h1>
                    <p class="text-muted">Sign In to your account</p>
                    <div class="input-group mb-3">
                        <span class="input-group-addon"><i class="icon-user"></i></span>
                        <?php 
                            echo form_input($form['username']);
                            echo form_error('username','<div class="note">','</div>'); 
                        ?>
                    </div>
                    <div class="input-group mb-4">
                        <span class="input-group-addon"><i class="icon-lock"></i></span>
                        <?php 
                            echo form_input($form['password']);
                            echo form_error('password','<div class="note">','</div>'); 
                        ?>
                    </div>
                    <p class="text-muted text-center">
                        Username : admin
                        Password : admin
                    </p>
                    <div class="row">
                        <div class="col-6">
                            <button type="submit" value="login" name="submit" class="btn btn-primary px-4">Login</button>
                        </div>
                        <div class="col-6 text-right">
                            <button type="button" class="btn btn-link px-0">Forgot password?</button>
                        </div>
                    </div>
                </div>
                <?php 
                    echo form_close(); 
                ?>
            </div>
        </div>
    </div>
</div>
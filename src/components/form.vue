<template>
    <div>
        <form>
        <div class="mb-3">
            <p>Please add your account details</p>
            <label for="name" class="form-label">Username / Email</label>

            <input type="email" class="form-control" id="nwme" placeholder="Type your username here">
        </div>

        <div class="mb-3">
            <label for="pass" class="form-label">Password</label>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" m-2 bi bi-eye-slash-fill" viewBox="0 0 16 16">
            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
            </svg>
            <input type="password" class="form-control bi bi-eye-slash-fill" id="pass" placeholder="Type your password"  >
            

        </div>

        <div class="mb-3 form-check">
            
            <label class="forgot d-flex justify-content-end">Forgot password?</label>
        </div>
        <button type="submit" class="btn">LOGIN</button>
        <label class="question d-flex justify-content-center m-3">Dont have an account? sign up!</label>
        
        </form>
    </div>
</template>

<script>
    export default {
        name: 'formComp',
        
    }
</script>

<style scoped>
form{
    width:25%;
    position: absolute;
    top: 50%;
    left: 58%;
    padding: 1%;
    border-radius: 3%;
    background-color: white;
    box-shadow: 0px 2px 900px rgb(206, 203, 203);
}
p{
    color: #9d9b9b;
}
label{
    font-size: 80%;
}
input{
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: #444242;
}
.forgot ,.question{
    color: 572589;
}
.btn{
    width: 100%;
    color: white;
    background-color:#572589
}
</style>
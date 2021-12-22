<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org"
      xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity5">
<head th:replace="layout/header::userHead"></head>
<body>
<div th:replace="layout/top::header"></div>
<div class="container text-center">
    <div class="login-form d-flex justify-content-center">
        <div class="col-sm-5">
            <div class="panel">
                <p>아이디와 비밀번호를 입력해주세요</p>
            </div>
            <form th:action="@{/login_proc}" class="form-signin" method="post">
                <div class="form-group">
                    <input type="text" class="form-control" name="username" placeholder="아이디" required="required"
                           autofocus="autofocus">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="password" placeholder="비밀번호" required="required">
                </div>

                <div class="form-group">
                    <input type="checkbox" name="remember-me" /> Remember Me
                </div>
                <button type="submit" class="btn btn-lg btn-primary btn-block">로그인</button>
            </form>
        </div>
    </div>
</div>
</body>
</html>
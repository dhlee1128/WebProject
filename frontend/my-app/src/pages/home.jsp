<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org"
      xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity5">

<head th:replace="layout/header::userHead">
    <meta charset="utf-8">
    <title>MeetMe</title>
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/jumbotron-narrow.css" rel="stylesheet">
</head>

<body>
<div th:replace="layout/top::header"></div>

<div class="container">
    <div class="navbar-header">
        <nav>
            <ul class="nav nav-pills pull-right">
                <li role="presentation" class="active"><a href="/member">Member</a></li>
                <li role="presentation"><a href="/community">커뮤니티</a></li>
                <li role="presentation"><a href="/myroom">마이룸</a></li>
            </ul>
        </nav>
        <h3 class="text-muted"><a href="/">MeetMe</a></h3>
    </div>

    <div class="jumbotron">
        <h1>밋미, 나를 만나보세요.</h1>
        <p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p>
            <a class="btn btn-lg btn-info" href="/signup" role="button">회원가입</a>
            <a class="btn btn-lg btn-info" href="/login" role="button">로그인</a>
            <a class="btn btn-lg btn-primary" href="/oauth2/authorization/google" role="button">Google 로그인</a>
            <a class="btn btn-lg btn-success" href="/oauth2/authorization/naver" role="button">네이버 로그인</a>
            <a class="btn btn-lg btn-warning" href="/oauth2/authorization/kakao" role="button">카카오 로그인</a>
            <a class="btn btn-lg btn-primary" href="/oauth2/authorization/facebook" role="button">Facebook 로그인</a>
        </p>
    </div>

    <div class="row marketing">
        <div class="col-lg-6">
            <h4>Subheading</h4>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

            <h4>Subheading</h4>
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

            <h4>Subheading</h4>
            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        </div>

        <div class="col-lg-6">
            <h4>Subheading</h4>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

            <h4>Subheading</h4>
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

            <h4>Subheading</h4>
            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        </div>
    </div>

    <footer class="footer">
        <p>© Company 2021</p>
    </footer>

</div> <!-- /container -->

<!-- jQuery (부트스트랩의 자바스크립트 플러그인을 위해 필요합니다) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<!-- 모든 컴파일된 플러그인을 포함합니다 (아래), 원하지 않는다면 필요한 각각의 파일을 포함하세요 -->
<script src="js/bootstrap.min.js"></script>


</body></html>
<html lang="ko"><head>
    <meta charset="utf-8">
    <title>MeetMe</title>
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/jumbotron-narrow.css" rel="stylesheet">
</head>
<body>
<div class="container">
    <div class="header">
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
        <div class="tbl_wrp">
            <form class="form-horizontal" th:action="@{/signup}" method="post">
                <div class="form-group">
                    <label for="username" class="col-sm-2 control-label">아이디</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control input-large" name="username" id="username" placeholder="아이디" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" class="col-sm-2 control-label">비밀번호</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control input-large" name="password" id="password" placeholder="비밀번호" data-minlength="6" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email" class="col-sm-2 control-label">이메일</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control input-large" name="email" id="email" placeholder="이메일" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="role" class="col-sm-2 control-label">권한</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control input-large" name="role" id="role" placeholder="권한" required>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-1 col-sm-10">
                        <button type="Submit" class="btn btn-lg btn-success">가입하기</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <footer class="footer">
        <p>© Company 2021</p>
    </footer>
</div>
</body>
</html>
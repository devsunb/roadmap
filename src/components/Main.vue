<template>
    <div class="main">
        <div class="row">
            <div class="col-7">
                <div class="d-table h-100 w-100">
                    <div class="d-table-cell align-middle title">
                        <p>LEARNING</p>
                        <p>DB.</p>
                    </div>
                </div>
            </div>
            <div class="col-5 main-right">
                <form class="form-inline justify-content-center search-form">
                    <input class="form-control" type="search">
                    <button class="btn my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
                </form>
                <div class="bottom-menu w-100">
                    <div class="row">
                        <div class="col-3">
                            <div class="d-table h-100 w-100 border-right border-white">
                                <div class="d-table-cell align-middle">
                                    추천 문서
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="d-table h-100 w-100 border-right border-white">
                                <div class="d-table-cell align-middle">
                                    만든이
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="d-table h-100 w-100 border-right border-white">
                                <div class="d-table-cell align-middle">
                                    랜덤 문서
                                </div>
                            </div>
                        </div>
                        <div class="col-3 school-name">
                            <div class="d-table h-100 w-100 border-white">
                                <div class="d-table-cell align-middle">
                                    대덕소프트웨어<br>마이스터고등학교
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "main"
};
</script>

<style scoped>
.main {
    width: 100vw;
    height: 100vh;
    background-image: url("/static/main.png");
    background-size: 100%;
    background-position: center;
    overflow: hidden;
}

.main-right {
    height: 100vh;
    background: url("/static/side.png");
    background-size: 100%;
    background-repeat: no-repeat;
}

.bottom-menu {
    position: absolute;
    bottom: 0;
    color: white;
    text-align: center;
    font-size: 15px;
    padding-right: 45px;
}
.bottom-menu .school-name {
    font-size: 12px;
}
.bottom-menu > div > div {
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    padding: 10px 0;
}
.bottom-menu > div > div:hover {
    background-color: white;
    color: #2b1939;
}

.title {
    padding-right: 25%;
    text-align: right;
    font-size: 80px;
    font-weight: bold;
    color: #2b1939;
}

.search-form {
    margin-top: 60vh;
}
.search-form > input {
    background-color: transparent;
    color: white;
    width: 350px;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid white;
}
.search-form > input:focus {
    outline: none;
}
.search-form > button {
    background-color: transparent;
    color: white;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid white;
}
.search-form > button:focus {
    outline: none;
}

@media (max-width: 1400px) {
    .main {
        width: 1400px;
    }
}
</style>

<template>
  <div>
      <header>
        <div class="page h_content">
            <a class="img logo" href="/" title="Xe.vatgia.com">
                <img src="https://xe.vatgia.com/assets/images/logo-v2.svg" alt="Xe.vatgia.com">
            </a>
            <div class="h_right">
                <div class="box_search">
                    <form class="h_search" action="/search">
                        <select name="type" id="typeSearch">
                            <option value="1">Cần mua</option>
                            <option value="2">Cần bán</option>
                            <option value="3">Cần thuê</option>
                            <option value="4">Cho thuê</option>
                        </select>
                        <div class="option-search" id="optionSearch">
                            <div class="current-select">
                                <span>Cần mua</span>
                            </div>
                            <div class="list-option-search" id="selectSearch" style="height: 0px; overflow: hidden;"><ul><li onclick="setTypeSearch(this,1)" data-value="1">Cần mua</li><li onclick="setTypeSearch(this,2)" data-value="2">Cần bán</li><li onclick="setTypeSearch(this,3)" data-value="3">Cần thuê</li><li onclick="setTypeSearch(this,4)" data-value="4">Cho thuê</li></ul></div>
                        </div>
                        <input name="keyword" id="autocomplete" placeholder="Tìm kiếm ..." autocomplete="off">
                        <!-- <script language="javascript">
                            $(document).ready(function () {
                                $('#autocomplete').autocomplete({
                                    serviceUrl: '/ajax/suggest?secret=dc2e01602ab65d03e8c40a6bd9da5783',
                                    noCache: true,
                                    autoSelectFirst: false,
                                    deferRequestBy: 300,
                                    minChars: 0,
                                    onSelect: function (suggestion) {
                                        url = suggestion.url || '';
                                        if (url !== '') {
                                            window.location.href = url;
                                        }
                                    }
                                });
                            });
                        </script> -->
                        <button>
                            <i class="mcon-search_v2"></i>
                        </button>
                    </form>
                    <a href="/dang-ban.aspx" title="Đăng bán" class="btn-success">
                        <i class="mcon-kilometer"></i>
                        <span>Đăng bán miễn phí</span>
                    </a>
                </div>
            </div>
            <div class="login-top">
                <div class="not-login">
                    <a href="#" class="name-login">
                        <i class="mcon-user-2"></i>
                        <span>Tài khoản</span>
                    </a>
                    <div class="tooltip-login">
                        <a href="https://id.vatgia.com/dang-nhap/oauth?&amp;client_id=affiliate&amp;_cont=http://xe.vatgia.com/login-callback?redirect=/xe-hoi-mazda">
                            <img src="https://xe.vatgia.com/assets/images/icon-login-facebook.png">
                        </a>
                        <a href="#">
                            <img src="https://xe.vatgia.com/assets/images/icon-login-google.png">
                        </a>

                    </div>
                </div>
            </div>
        </div>
        <div class="box-header-v2">
            <div class="page">
                <nav class="nav-header-v2">
                    <ul class="navbar" >

                        <li v-for="item_menu in menu" :key="item_menu.id">
                            <router-link :to="item_menu.link_web" class="name" :title="item_menu.title">{{item_menu.title}}</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  </div>
</template>
<script>
  let axios = require('axios')
export default {
  name: "Header",
  data() {
    return {
      menu: {}
    };
  },
  mounted() {
    this.getMenu();
  },
  methods: {
    getMenu() {
      axios
        .get("https://xe.vatgia.com/api/navigation")
        .then(response => {
          this.menu = response.data.data;
        });
    }
  }
};
</script>

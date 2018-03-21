<template>
  <div class="head-page-vehicle">
    <!-- <script>
        function errorCover(el, img) {
            var _el = $(el);
            _el.attr('src', img);
        }
    </script> -->
    <div class="vehicle-cover">
      <div class="photo-cover">
        <img onerror="errorCover(this, 'https://cdnxehoi.vatgia.vn/full/2017/09/07/1504770892-agq.png')"
             src="https://cdnxehoi.vatgia.vn/full/2017/09/07/1504770892-agq.png">
      </div>
      <div class="page">
        <div class="teaser-cover ">
          <div class="title-cover">
            <div class="logo-vehicle"><img src="https://cdnxehoi.vatgia.vn/thumb/100/2017/10/1508831363-iqe.png"></div>
            <h1>Xe hơi Mazda</h1>


            <div class="follow-vehicle">
    <span id="btn_follow_9" class="follow-btn  " onclick="Follow.setFollow(this)">
        <input type="hidden" name="dataFollow" class="dataFollow"
               value="ey 2ZWhfaWQi{ }iIx: :DU3NSIsInZlaF9uYW1lIjoiTUFaREEiLC 2ZWhfa2V5d29yZCI6I| |1he| |RhLG1hZGEiLC 2ZWhfb3 0aGVyX2tleXdvc| |Qi{ }i tYXpkYSxtYWRhIiwid| |VoX3R5cGUi{ }iIxIiwid| |VoX2xvZ28i{ }i odHRwczpcL1wvY2RueGVob2kud| |F0Z2lhLnZuXC9| |dWxsXC8y: :DE3XC8x: :Fwv: :jRcLzE1: :Dg4: :zEzNj: :taXFlLnBuZyIsInZlaF9wYX lbnRfaWQi{ }jAsInllYXIi{ }jAsIn ld3 pdGUi{ }nsic| |V3c| |l0ZSI6InhlLWhvaS1tYXpkYSIsI| |lSZXci{ }jk0NjQ0LC 0aXRsZV ldyI6IlhlIGhcdTAxYTFpIE1he| |RhIn19">
        <i class="mcon-wifi"></i>
        <span class="ftext">Theo dõi</span>
            </span>
            </div>

            <!-- <script>


                var Follow = {
                    setFollow: function (el) {
                        var _el = $(el);
                        var _data = _el.find('.dataFollow');

                        $.ajax({
                            url: '/ajax/setfollow',
                            data: {
                                'data': _data.val(),
                                'urlCurrent': 'https://xe.vatgia.com/xe-hoi-mazda'
                            },
                            type: 'POST',
                            dataType: 'json',
                            beforeSend: function () {
                            },
                            success: function (respons) {
                                var dataReponse = respons['vars']['follow'];
                                var _code = dataReponse['code'];
                                var _message = dataReponse['message'];
                                var _data = dataReponse['data'];
                                switch (_code) {
                                    case 1:
                                        window.location.href = _data;
                                        break;
                                    case 2:
                                        break;
                                    case 3:
                                        $(el).addClass("followed");
                                        $(el).find(".ftext").text('Bạn đang theo dõi xe này');
                                        break;
                                    case 4:
                                        $(el).removeClass("followed");
                                        $(el).find(".ftext").text('Theo dõi');
                                        break
                                    case 6:
                                        $(el).removeClass("followed");
                                        $(el).parents("li").remove();
                                        break;
                                }
                                ;

                                if ($("#list_follow li").length <= 0) {
                                    $("#follow").fadeOut('fast', function () {
                                        $(".follow-vehicle .mcon-arr_down").remove();
                                        $(".follow-single").removeClass('follow-single');
                                    });
                                }
                            }
                        });
                    }
                }
            </script> -->
          </div>
          <div class="teaser-content">
            <p>Tổng hợp thông tin, video, đánh giá, hình ảnh, giá xe <b>Xe hơi Mazda</b> cập nhật mới nhất
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="page">

      <div class="box_projects vehicle-feature">
        <div class="projects" role="menu" itemscope="" itemtype="https://schema.org/SiteNavigationElement">
          <div class="item" v-for="item_feature in feature" :key="item_feature.id">
            <div class="card">
              <a class="img" :title="item_feature.name" :href="'/'+item_feature.link_web">
                <img onerror="noimage(this)" :alt="item_feature.name" :src="item_feature.photo.sm">
              </a>
              <h3><a itemprop="url" :href="'/'+item_feature.link_web" :title="item_feature.name" class="name"><span
                itemprop="name">{{item_feature.name}}</span></a></h3>
              <span class="location"><span></span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: "HeadPage",
    props: ['feature'],
    data() {
      return {}
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        console.log(this.feature);
      }
    }
  };
</script>

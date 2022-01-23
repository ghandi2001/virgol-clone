<template>
    <v-content>
        <v-container>
            <v-row class="d-flex justify-center">
                <v-col cols="12" md="8">
                    <v-list-item>
                        <v-list-item-avatar size="80">
                            <v-avatar size="80">
                                <v-img src="https://files.virgool.io/upload/users/71114/avatar/kXrdgQ.png?x-oss-process=image/resize,h_90,w_90,center"
                                ></v-img>
                            </v-avatar>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="font-weight-bold">
                                ابوالفضل قندی
                                <v-btn color="grey"
                                       rounded
                                       dark
                                       small
                                       class="darken-2 px-5 mr-3 mb-3"
                                >دنبال کنید</v-btn>
                            </v-list-item-title>
                            <v-list-item-subtitle class="body-2 grey--text">
                                ‌‌‌‌استاد دانشگاه تهران، ‌فعال سیاسی در حوزه تمدن ایران‌شهری،‌‌‌‌ توییتر » ‌@AbbasAkhoundi تلگرام » @AbbasAkhoundi اینستاگرام »
                            </v-list-item-subtitle>
                            <v-list-item-subtitle class="caption grey--text">
                                ۲ ساعت پیش / خواندن ۹ دقیقه
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <div class="mt-12">
                        <p class="headline font-weight-bold">
                            خلقِ سرمایه‌ی اجتماعی - فوری‌ترین هدفی که دولت باید پی‌بگیرد
                        </p>

                        <p class="subtitle mt-3 body-text">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>

                    <div class="my-10">
                        <v-btn depressed>لاراول</v-btn>
                        <v-btn depressed>پی اچ پی</v-btn>
                        <v-btn depressed>ویو جی اس</v-btn>
                        <v-btn depressed>جی اس</v-btn>
                    </div>

                    <div class="d-flex flex-row mb-5">
                        <span class="ml-5">
                            <v-icon>mdi-bookmark-outline</v-icon>
                        </span>
                        <span class="ml-5">
                            <v-icon>mdi-heart-outline</v-icon>
                            0
                        </span>
                        <span class="ml-5">
                            <v-icon>mdi-comment-outline</v-icon>
                            2
                        </span>
                        <v-spacer></v-spacer>
                        <v-icon>mdi-telegram</v-icon>
                        <v-btn outlined
                               rounded
                               class="mr-3"
                        >aaaaaaaaafio</v-btn>
                    </div>

                    <v-divider></v-divider>

                    <div class="mt-12">
                        <p class="body-2 font-weight-bold">شاید از این نوشته‌ها هم خوشتان بیاید</p>
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12" md="4" v-for="item in [1,2,3]">
                                    <v-card>
                                        <v-img src="https://files.virgool.io/upload/users/4424/posts/kzeezd1ymxpp/m4c8lglrblaw.jpeg?x-oss-process=image/resize,w_300/crop,h_140,center/quality,q_80"
                                        ></v-img>
                                        <v-card-title>
                                            مرثیه ای بر عاقبت آزادی خواهی
                                        </v-card-title>

                                        <v-card-actions>
                                            <v-list-item>
                                                <v-list-item-avatar>
                                                    <v-avatar>
                                                        <v-img src="https://files.virgool.io/upload/users/71114/avatar/kXrdgQ.png?x-oss-process=image/resize,h_90,w_90,center"
                                                        ></v-img>
                                                    </v-avatar>
                                                </v-list-item-avatar>
                                                <v-list-item-content>
                                                    <v-list-item-title class="body-2 font-weight-bold">
                                                        عباس آخوندی
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle class="caption grey--text">
                                                        ‌‌‌‌خواندن
                                                    </v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>

                                            <v-spacer></v-spacer>

                                            <v-icon>mdi-bookmark-outline</v-icon>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>

                    <div>
                        <p>پاسخ ها</p>
                        <v-text-field label="نظر خود را بنویسید"></v-text-field>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "PostShow"
    }
</script>

<style scoped>
    .body-text {
        text-align: justify;
        line-height: 2.3rem;
    }
</style>

"use client";

import Image from "next/image";
import logo from "../../images/logo/logo_sandyselect.png";
import toffeeImg from "../../images/product/WechatIMG104.jpg";
import cakeImg from "../../images/product/WechatIMG105.jpg";
import gallery1 from "../../images/product/WechatIMG100.jpg";
import gallery2 from "../../images/product/WechatIMG101.jpg";
import gallery3 from "../../images/product/WechatIMG102.jpg";
import gallery4 from "../../images/product/WechatIMG120.jpg";

export default function Home() {
  const toffeeFormUrl = "https://forms.gle/fake-toffee-form";
  const cakeFormUrl = "https://forms.gle/fake-cake-form";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Image src={logo} alt="Sandy Select" width={120} height={40} />
          <div className="flex gap-2">
            <a
              href={toffeeFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300"
            >
              立即订购太妃糖
            </a>
            <a
              href={cakeFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300"
            >
              立即订购蛋糕
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20"></div>
        <div className="relative z-10 text-center px-4">
          <Image
            src={logo}
            alt="Sandy Select logo"
            width={200}
            height={80}
            className="mx-auto mb-6"
          />
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6">
            Sandy Select
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            米其林大厨Sandy亲手制作，臻选Whole Foods有机食材，匠心手作，只为极致美味。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={toffeeFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              立即订购太妃糖
            </a>
            <a
              href={cakeFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              立即订购蛋糕
            </a>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-pulse"></div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            精品产品
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Handmade Candy */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64">
                <Image src={toffeeImg} alt="巴旦木太妃糖" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">米其林大厨Sandy亲制巴旦木太妃糖</h3>
                <p className="text-gray-600 mb-4">
                  米其林大厨在自己家熬1.5小时的全有机日本海藻巴旦木太妃糖，不甜不齁，老王家同款同厨同灶。<br/>
                  75加元一盒，非常适合做伴手礼。<br/>
                  孩子们可以迅速抢完，大人们也不需要在乎增肥，相反还可以减肥，因为吃两块中午就不饿了。<br/>
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-pink-600">$75 CAD</span>
                  <span className="text-sm text-gray-500 ml-2">伴手礼首选</span>
                </div>
                <a
                  href={toffeeFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block bg-pink-500 text-white px-4 py-3 rounded-full hover:bg-pink-600 transition-colors font-semibold text-center"
                >
                  立即订购太妃糖
                </a>
              </div>
            </div>

            {/* Premium Cake */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64">
                <Image src={cakeImg} alt="精品蛋糕" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">精品蛋糕</h3>
                <p className="text-gray-600 mb-4">米其林大厨Sandy亲自制作，仅限温哥华地区配送</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-orange-600">$300 CAD</span>
                  <span className="text-sm text-gray-500 ml-2">仅限温哥华</span>
                </div>
                <a
                  href={cakeFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block bg-orange-500 text-white px-4 py-3 rounded-full hover:bg-orange-600 transition-colors font-semibold text-center"
                >
                  立即订购蛋糕
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">关于我们</h2>
              <p className="text-lg text-gray-600 mb-6">
                Sandy Select 由米其林星级大厨Sandy亲自主理，专注于高端手工糖与精品蛋糕。我们只选用Whole Foods有机食材，秉承匠心精神，纯手工制作每一份甜品。每一口，都是Sandy的用心与坚持，只为极致美味与健康。
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">100%</div>
                  <div className="text-gray-600">有机食材</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">0</div>
                  <div className="text-gray-600">差评</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-8xl">👨‍🍳</div>
            </div>
          </div>
        </div>
      </section>

      {/* Craft Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">制作与保质</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            巴旦木（美国大杏仁）太妃糖采用英国传统手工技艺，慢火熬制超过一小时，绝不添加香精与色素。
            焦糖需在 <span className="font-semibold">160℃</span> 高温下制作，坚果保质期至少八个月。
            建议置于避光阴凉处保存，夏季亦可冷藏。随着时间推移，甜度会逐渐减弱，奶香与坚果香更为突出。
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            我们的承诺
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">有机食材</h3>
              <p className="text-gray-600">所有食材均从Whole Foods采购，确保100%有机</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-semibold mb-2">米其林大厨</h3>
              <p className="text-gray-600">由经验丰富的米其林星级大厨Sandy亲自制作</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">零差评</h3>
              <p className="text-gray-600">开业至今保持零差评记录，客户满意度100%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">产品照片</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Image src={gallery1} alt="产品图1" width={300} height={200} className="rounded-xl object-cover" />
            <Image src={gallery2} alt="产品图2" width={300} height={200} className="rounded-xl object-cover" />
            <Image src={gallery3} alt="产品图3" width={300} height={200} className="rounded-xl object-cover" />
            <Image src={gallery4} alt="产品图4" width={300} height={200} className="rounded-xl object-cover" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">联系我们</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">电话</h3>
              <p className="text-gray-600">+1 778-879-8016</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2">邮箱</h3>
              <p className="text-gray-600">jianweiwangsandy@gmail.com</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">地址</h3>
              <p className="text-gray-600">温哥华市中心</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Sandy Select</h3>
          <p className="text-gray-400 mb-6">米其林大厨Sandy亲手制作，臻选Whole Foods有机食材，匠心手作，只为极致美味。</p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <span>© 2024 Sandy Select. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

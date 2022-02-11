import { importAll } from '../../functions.js';

const CreateBuildDestroy = () => {
  // import small images
  var imagesSmall = importAll(require.context('../../media/createbuilddestroy/small', true, /\.(png|jpe?g|svg)$/));

  return (
    <>
    <h1>Create Build Destroy</h1>
    <p className="text-block">in 2006, my cousin Tyler started designing graphics and silk-screening them onto shirts by himself. They were colorful and often based on rap lyrics. He called the brand Create Clothing. Around 2007 I asked if I could help him out. I was interested in business (partly inspired by another t-shirt company called LOLA) and thought it would be a cool experience to try and sell the t-shirts to stores (i.e. wholesale), and also find a professional screen printer to make the shirts. Over the next few years the graphics and brand evolved, and Jesse and Jordan joined in to help out. I was mainly still responsible for sales and production. Our t-shirts were sold in stores around the US, and eventually some in Europe and Scandinavia too (with the help of a showroom in Milan, and one in Denmark). We made stickers, matchbooks, and hats. We threw a bunch of parties. We had a lot of photoshoots. We had a blog that I posted on religiously. Over time I learned how to use Photoshop and Illustrator, and started making our product catalogs, other sales and marketing material, and various graphics/event fliers/etc. I also learned some HTML and CSS (thanks PJ), and managed our website. Back then I never saw myself as a designer, or even really as a creative person. Looking back now, working on this project was definitely my first steps towards (formally/professionally) becoming those things. I am forever in gratitude to Tyler, Jordan, and Jesse for such a wonderful and educational journey : )</p>
    {imagesSmall.map((element, index) => (
      <img key={index} src={element} loading="lazy" />
    ))}
    </>
  )
}

export default CreateBuildDestroy;

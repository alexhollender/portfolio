import { importAll } from '../../functions.js';

const Onia = () => {
  // import large images
  var imagesLarge = importAll(require.context('../../img/onia/large', true, /\.(png|jpe?g|svg)$/));
  // import small images
  var imagesSmall = importAll(require.context('../../img/onia/small', true, /\.(png|jpe?g|svg)$/));
  // create array of objects, {largeImage: smallImage}
  var imagesArr = [];
  {imagesLarge.map((element, index) => (
   imagesArr.push({[element]: imagesSmall[index]})
  ))}

  return (
    <>
    <h1>Onia</h1>
    <p className="body">Around 2010 a friend of my sister's, Carl, started a small, high-end, men's swimsuit company in NYC called <a href="https://onia.com/" target="_blank" rel="noreferrer">Onia</a>. After graduating from college in the spring of 2011 I started helping Carl out, mostly with website and marketing/communications design stuff. We enjoyed working together so I started working for Carl full time. Over the next two years I helped shape the brand. I designed swimsuits and other products, art directed photoshoots & popup shops, desiged packaging & collateral, created mood boards, marketing materials, designed and redesigned the website, and did other such things. I was the only designer working on Onia at the time. The brand is still around and is doing well.</p>
    {imagesArr.map((element, index) => (
      <picture key={index}>
        <source media="(min-width:1580px)" srcSet={Object.keys(element)} width="2000" />
        <img src={Object.values(element)} width="1000" loading="lazy" key={index} />
      </picture>
    ))}
    </>
  )
}

export default Onia;

import { importAll } from '../../functions.js';

const AltSchool = () => {
  // import large images
  var imagesLarge = importAll(require.context('../../img/altschool/large', true, /\.(png|jpe?g|svg)$/));
  // import small images
  var imagesSmall = importAll(require.context('../../img/altschool/small', true, /\.(png|jpe?g|svg)$/));
  // create array of objects, {largeImage: smallImage}
  var imagesArr = [];
  {imagesLarge.map((element, index) => (
   imagesArr.push({[element]: imagesSmall[index]})
  ))}

  return (
    <>
    <h1>AltSchool</h1>
    <p className="body">...Altschool <a href="https://onia.com/" target="_blank" rel="noreferrer">Onia</a>....</p>
    {imagesArr.map((element, index) => (
      <picture key={index}>
        <source media="(min-width:1580px)" srcSet={Object.keys(element)} width="2000" />
        <img src={Object.values(element)} width="1000" loading="lazy" key={index} />
      </picture>
    ))}
    </>
  )
}

export default AltSchool;

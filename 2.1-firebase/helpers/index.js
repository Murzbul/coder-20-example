
function getDao(doc)
{
  const product = new Product();

  product.attribute1 = doc.data().attribute1;
  product.attribute2 = doc.data().attribute2;

  return product;
}

export default getDao;

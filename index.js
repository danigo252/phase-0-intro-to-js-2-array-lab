// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{
  cats.push(name);
  return cats;
}

function destructivelyPrependCat(name)
{
  cats.unshift(name);
  return cats;
}

function destructivelyRemoveLastCat()
{
  cats.pop();
  return cats;
}

function destructivelyRemoveFirstCat()
{
  cats.shift();
  return cats;
}

function appendCat(name)
{
  const catsCopy = [];
  catsCopy.push(...cats);
  catsCopy.push(name);
  return catsCopy;
}

function prependCat(name)
{
  const catsCopy = [];
  catsCopy.push(...cats);
  catsCopy.unshift(name);
  return catsCopy;
}

function removeLastCat(name)
{
  const catsCopy = [];
  catsCopy.push(...cats);
  catsCopy.pop(name);
  return catsCopy;
}

function removeFirstCat()
{
  const catsCopy = [];
  catsCopy.push(...cats);
  catsCopy.shift();
  return catsCopy;

}

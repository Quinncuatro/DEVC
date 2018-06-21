  // Get a list of names of the links
remote any function getRownames() {
  ver get_results = new query(datasource="elidb",sql="SELECT ItemName FROM infotables ORDER BY lower(ItemName) DESC").execute().getResult();
  // Create array to store the list of names
  var results = ArrayNew(1);
  // Add each item to the array
  for (result in get_results) {
    arrayAppend(results, result.itemname);
  }
  // This sets the return of this function to json format
  url.returnformat = 'json';
  return results;
}
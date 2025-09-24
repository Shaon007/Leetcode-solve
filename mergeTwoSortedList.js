function mergeTwoLists(list1, list2) {
  let merged = list1.concat(list2);
  merged.sort((a, b) => a - b);
  return merged;
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
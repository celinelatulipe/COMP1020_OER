var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "ch-chapter-title",
  "level": "1",
  "url": "ch-chapter-title.html",
  "type": "Chapter",
  "number": "1",
  "title": "Chapter 1: Java Refresher Part 1",
  "body": " Chapter 1: Java Refresher Part 1   Text before the first section.    "
},
{
  "id": "ch-chapter-title",
  "level": "1",
  "url": "ch-chapter-title.html",
  "type": "Chapter",
  "number": "2",
  "title": "Chapter 2: Java Refresher Part 2",
  "body": " Chapter 2: Java Refresher Part 2   Text before the first section.   "
},
{
  "id": "Objects Intro Starter Exercises",
  "level": "1",
  "url": "Objects Intro Starter Exercises.html",
  "type": "Section",
  "number": "3.1",
  "title": "Starter Level",
  "body": " Starter Level   The code below provides a very simple class. Jasmine's last name, 'Singh', is missing. Add a line of code to fix this.   public class Person { public String firstName; public String lastName; public int age; } public static void main { person1 = new Person(); person1.firstName = \"Jasmine\" person1.age = 27 }      "
},
{
  "id": "Objects Intro Growth Exercises",
  "level": "1",
  "url": "Objects Intro Growth Exercises.html",
  "type": "Section",
  "number": "3.2",
  "title": "Growth Level",
  "body": " Growth Level   Growth Exercise 1   public class Person { public String name; public int age; } public static void main { person1 = new Person(); person1.name = \"Jasmine\" person1.age = 27 }      "
},
{
  "id": "Objects Intro Stetch Exercises",
  "level": "1",
  "url": "Objects Intro Stetch Exercises.html",
  "type": "Section",
  "number": "3.3",
  "title": "Stretch Level",
  "body": " Stretch Level   Stretch Exercise 1   public class Person { public String name; public int age; } public static void main { person1 = new Person(); person1.name = \"Jasmine\" person1.age = 27 }      "
},
{
  "id": "ch-chapter-title",
  "level": "1",
  "url": "ch-chapter-title.html",
  "type": "Chapter",
  "number": "4",
  "title": "Chapter 4: Objects Intro Part 2",
  "body": " Chapter 4: Objects Intro Part 2   Text before the first section.    "
},
{
  "id": "ch-chapter-title",
  "level": "1",
  "url": "ch-chapter-title.html",
  "type": "Chapter",
  "number": "5",
  "title": "Chapter 5: Strings and File I\/O",
  "body": " Chapter 5: Strings and File I\/O   Text before the first section.    "
},
{
  "id": "ch-chapter-title",
  "level": "1",
  "url": "ch-chapter-title.html",
  "type": "Chapter",
  "number": "6",
  "title": "Chapter 6: ArrayLists",
  "body": " Chapter 6: ArrayLists   Text before the first section.    "
},
{
  "id": "ch-chapter-title",
  "level": "1",
  "url": "ch-chapter-title.html",
  "type": "Chapter",
  "number": "7",
  "title": "Chapter 7: Searching and Sorting",
  "body": " Chapter 7: Searching and Sorting   Text before the first section.    "
},
{
  "id": "ch-chapter-title",
  "level": "1",
  "url": "ch-chapter-title.html",
  "type": "Chapter",
  "number": "8",
  "title": "Chapter 8: Recursion",
  "body": " Chapter 8: Recursion   Text before the first section.    "
},
{
  "id": "ch-chapter-title",
  "level": "1",
  "url": "ch-chapter-title.html",
  "type": "Chapter",
  "number": "9",
  "title": "Chapter 9: Multidimensional Arrays",
  "body": " Chapter 9: Multidimensional Arrays   Text before the first section.    "
},
{
  "id": "ch-chapter-title",
  "level": "1",
  "url": "ch-chapter-title.html",
  "type": "Chapter",
  "number": "10",
  "title": "Linked Lists",
  "body": " Linked Lists   Text before the first section.    "
},
{
  "id": "ch-chapter-title",
  "level": "1",
  "url": "ch-chapter-title.html",
  "type": "Chapter",
  "number": "11",
  "title": "Chapter 11: Interfaces",
  "body": " Chapter 11: Interfaces   Text before the first section.    "
},
{
  "id": "ch-chapter-title",
  "level": "1",
  "url": "ch-chapter-title.html",
  "type": "Chapter",
  "number": "12",
  "title": "Chapter 12: ADTs",
  "body": " Chapter 12: ADTs   Text before the first section.    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

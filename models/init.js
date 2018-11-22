db.content.insertOne({
  title: "test",
  data: "my test content",
  categories: []
});

db.category.insertOne({
  name: "test category"
});

const Blog = require('./blog.model');

module.exports = {
  getAll,
  getByPath,
  getByCategory,
  create,
  find,
  update,
  remove,
  getNewest,
  getArchive,
  getByMonth
};

async function getAll() {
  return await Blog.find();
}

async function getByPath(path) {
  return await Blog.findOne({ path });
}

async function find(query) {
  return await Blog.find( { $text: { $search: query } } )
}

async function getByCategory(category) {
  return await Blog.find({ categories: {$elemMatch: { name: category}}})
}

async function create(params) {
  const blog = new Blog(params);
  await blog.save();
}

async function update(path, params) {
  const blog = await Blog.findOne({path});
  if (!blog) throw 'Blog not found';
  Object.assign(blog, params);
  await blog.save();
}

async function remove(path) {
  await Blog.findOneAndDelete({path});
}

async function getNewest() {
  return await Blog.findOne().sort('-createdAt');
}

async function getArchive(timezone) {
  return await Blog.aggregate([{
    $project: {
      year: {
        $year: {
          date: "$createdAt",
          timezone: timezone
        }
      },
      month: {
        $month: {
          date: "$createdAt",
          timezone: timezone
        }
      }
    }
  },
  {
    $group: {
      _id: {
        month: "$month",
        year: "$year"
      },
      count: {$sum: 1}
    }
  }]);
}

async function getByMonth(archive, timezone) {
  let archiveParts = archive.match(/[a-zA-Z]+|[0-9]+/g);
  let month = parseInt(getMonthFromString(archiveParts[0]), 10);
  let year = parseInt(archiveParts[1], 10);
  return await Blog.aggregate([{
    $project: {
      alt: 1,
      title: 1,
      photo: 1,
      path: 1,
      createdAt: 1,
      quote: 1,
      year: {
        $year: {
          date: "$createdAt",
          timezone: timezone
        }
      },
      month: {
        $month: {
          date: "$createdAt",
          timezone: timezone
        }
      }
    }
  },
  {
    $match: {
      month: month, year: year
    }
  }]);
}

function getMonthFromString(mon){
  return new Date(Date.parse(mon +" 1, 2012")).getMonth() + 1;
}

import { BlogPost } from './blog';

/*  Create a Blog class which can
store a list of BlogPosts
add BlogPosts to the list
delete(int) one item at given index
update(int, BlogPost) one item at the given index and update it with another BlogPost   */

class Blog {
  blogPosts: BlogPost[];

  constructor(blogPosts: BlogPost[] = []) {
    this.blogPosts = blogPosts;
  }

  delete(index: number) {
    this.blogPosts.splice(index, 1);
    console.log(`Blogpost #${index + 1} has been deleted.`);
  }

  update(index: number, blogPost: BlogPost) {
    this.blogPosts.splice(index, 1, blogPost);
    console.log(
      `Blogpost #${index + 1} has been replaced with a new post titled: ${
        blogPost.title
      }.`,
    );
  }
}

const myBlog = new Blog([
  new BlogPost(
    'John Doe',
    'Lorem Ipsum',
    'Lorem ipsum dolor sit amet',
    '2000.05.04',
  ),
  new BlogPost(
    'Tim Urban',
    'Wait but why',
    'A popular long-form, stick-figure-illustrated blog about almost everything.',
    '2010.10.10',
  ),
  new BlogPost(
    'William Turton',
    'One Engineer Is Trying to Get IBM to Reckon With Trump',
    'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.',
    '2017.03.28',
  ),
]);
console.log(myBlog.blogPosts);
myBlog.delete(2);
myBlog.update(
  1,
  new BlogPost('Yasmine', 'Doudou love', "Me's love you's", '2020.07.28'),
);
console.log(myBlog.blogPosts);

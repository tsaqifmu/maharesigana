const BlogContainer = ({ children, className }: any) => {
  return (
    <section
      className={`h-full w-full px-4 md:px-14 lg:px-16 xl:max-w-4xl ${className}`}
    >
      {children}
    </section>
  );
};

export default BlogContainer;

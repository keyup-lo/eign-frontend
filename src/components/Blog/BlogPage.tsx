export default function BlogPage() {
    const featuredPost = {
      title: "Anyone can hold the helm when the sea is calm",
      excerpt: "Stay on top of announcements and research that meets needs. challenge ahead of experts.",
      image: "/images/blog/featured-post.jpg"
    };
  
    const sidebarPosts = [
      {
        title: "Anyone can hold the helm when the sea is calm",
        image: "/images/blog/sidebar-1.jpg"
      },
      {
        title: "Anyone can hold the helm when the sea is calm", 
        image: "/images/blog/sidebar-2.jpg"
      },
      {
        title: "Anyone can hold the helm when the sea is calm",
        image: "/images/blog/sidebar-3.jpg"
      },
      {
        title: "Anyone can hold the helm when the sea is calm",
        image: "/images/blog/sidebar-4.jpg"
      }
    ];
  
    const blogPosts = [
      {
        title: "Anyone can hold the helm when the sea is calm",
        image: "/images/blog/post-1.jpg"
      },
      {
        title: "Anyone can hold the helm when the sea is calm",
        image: "/images/blog/post-2.jpg"
      },
      {
        title: "Anyone can hold the helm when the sea is calm",
        image: "/images/blog/post-3.jpg"
      }
    ];
  
    const newPosts = [
      {
        title: "Anyone can hold the helm when the sea is calm",
        image: "/images/blog/new-1.jpg"
      },
      {
        title: "Anyone can hold the helm when the sea is calm",
        image: "/images/blog/new-2.jpg"
      },
      {
        title: "Anyone can hold the helm when the sea is calm",
        image: "/images/blog/new-3.jpg"
      }
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Main Content - Left 3 columns */}
            <div className="lg:col-span-3 space-y-12">
              
              {/* Header */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome to Eign blog</h1>
                <p className="text-gray-600">Stay on top of announcements and research that meets needs. challenge ahead of experts.</p>
              </div>
  
              {/* Featured Post */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div 
                  className="w-full h-64 bg-cover bg-center"
                  style={{backgroundImage: `url('${featuredPost.image}')`}}
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                    Read More
                  </button>
                </div>
              </div>
  
              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                    <div 
                      className="w-full h-48 bg-cover bg-center"
                      style={{backgroundImage: `url('${post.image}')`}}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{post.title}</h3>
                      <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
  
              {/* New Post Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">New Post</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {newPosts.map((post, index) => (
                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                      <div 
                        className="w-full h-48 bg-cover bg-center"
                        style={{backgroundImage: `url('${post.image}')`}}
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{post.title}</h3>
                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                          Read More
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Sidebar - Right column */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Search Blog */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Search Blog</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <svg 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
  
              {/* Recent Posts */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {sidebarPosts.map((post, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div 
                        className="w-full h-24 bg-cover bg-center rounded-lg mb-2"
                        style={{backgroundImage: `url('${post.image}')`}}
                      />
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {post.title}
                      </h4>
                      <button className="text-emerald-500 hover:text-emerald-600 text-xs font-medium mt-1 transition-colors">
                        Read More
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
function TopicsPage() {
  return (
    <>
      <h2>Web Development Concepts</h2>
      <nav class="local">
        <a href="#servers">Web Servers</a>
        <a href="#frontend">Frontend Design</a>
        <a href="#images">Optimizing Images</a>
        <a href="#favicons">Favicons</a>
        <a href="#css">Cascading Stylesheets</a>
      </nav>
      <article id="servers">
        <h3>Web Servers</h3>

        <p>
          Part of a <strong>URL or Uniform Resource Locator</strong> is the path
          to a resource. The default file path that is configured to the request
          for &#47; is called the
          <strong>designated homepage</strong>. Whenever a GET request is
          received by the web application for the &#47;, the designated homepage
          is returned. In most cases, the file index.html is the homepage. For
          other web servers and languages, the designated homepage may be
          different. For example, Microsoft&#39;s .NET platform uses
          default.html as the homepage and in some cases a server might look for
          index.js or index.php as the homepage.
        </p>

        <p>
          In the Web Dev/Inspector Network tab, the output screen displays the
          homepage requested and the <strong>headers</strong> for the request
          and response. The general header returns the URL, type of request
          method (GET method), status code of the request, remote address (IP),
          and referrer policy. The <strong>request headers</strong> for the
          index.html file within the ENGR web server provides additional
          information such as the language, cache controls, host, encoding,
          browser, etc. Whereas the file on the local computer returns a warning
          message, this is returned because the
          <strong>HTTP request</strong> was not sent over the network. The
          <strong>response headers</strong> return the content-type and
          last-modified for the file on the local computer and returns the cache
          details, content-type, dates, etc. for the file within the web server,
          as well as the <strong>raw response data</strong>.
        </p>

        <p>
          After a request is made, an <strong>HTTP response</strong> provides
          <strong>status codes</strong> to relay whether a request has been
          successful or not. From this webpage, the favicon.ico file has the
          status code 200 because the request to locate the favicon was
          successful, and the response body has the needed information, as
          displayed in the browser&#39;s tab. While the main.css and main.js
          file has the status code 404 because the requested resources were not
          found on the server.
        </p>

        <p>
          The <strong>scheme</strong> of the URL identifies the protocol the web
          client must use to request a resource, the scheme for this website is
          https. The <strong>subdomain(s)</strong>, a subsection of the domain,
          is web.engr. The <strong>domain</strong>, which is mapped to the IP
          address for the server, is oregonstate.edu. And the
          <strong>path to resource</strong> is /~cornellj/a1-cornellj/.
        </p>
      </article>
      <article id="frontend">
        <h3>Frontend Design</h3>

        <p>
          <strong>Frontend design</strong> creates an interactive experience for
          the user. This entails creating the visual design of a webpage and the
          graphical user-interface (GUI), which requires a consistent color
          scheme, font and typography scheme, photographs, an icon, an
          illustration scheme, and a logical navigation system.
        </p>
        <p>
          The <strong>Five &#8220;E&#8221;s of Usability</strong> are:
        </p>
        <dl>
          <dt>
            <strong>Effective</strong>
          </dt>
          <dd>
            The website is helpful to users to meet desired goals and provide
            accurate results.
          </dd>
          <dt>
            <strong>Efficient</strong>
          </dt>
          <dd>The user can perform tasks and obtain results quickly.</dd>
          <dt>
            <strong>Easy to navigate</strong>
          </dt>
          <dd>
            The user, specifically a first-time user, immediately understands
            how to accomplish their goal on the website and can remember next
            time.
          </dd>
          <dt>
            <strong>Error-free</strong>
          </dt>
          <dd>
            The website does not have errors that users may encounter when
            performing tasks. This ensures that there are no accessibility and
            availability issues.
          </dd>
          <dt>
            <strong>Enjoyable</strong>
          </dt>
          <dd>
            The user&#39;s experience is engaging. That is, that the intended
            user is happy with the design and content and will return to the
            site in the future.
          </dd>
        </dl>
        <p>
          Page layout tags are <strong>block-level</strong> elements that help
          structure the content displayed by the browser. Since they are
          block-level, they typically have a newline before and after the
          element. The structured content helps machines understand which area
          of a page includes which components, machines such as screen readers
          for those visually impaired and search engine robots. The
          <strong>header</strong> element marks the banner of a website and
          normally includes the name of the website, publisher, and marketing
          slogan. It is normally the same from page to page for consistency. The{" "}
          <strong>nav</strong> element is a block of navigation that takes the
          user to other pages, which can be internal or external pages. A
          navigation block normally includes the main menu, a search feature,
          tools, stories, locations, and legal links. The
          <strong>main</strong> element marks the primary area that holds the
          content of the webpage. The <strong>section</strong> element is used
          to group related content that cannot stand on its own. A section
          usually has a first level heading tag called a<strong>h1</strong>{" "}
          nested immediately after its opening tag. This h1 tag describes what
          the section contains. If the section cannot be described within the h1
          tag, an <strong>article</strong> element can be used. An article
          element is used for a single specific topic. Within it is normally the
          second level heading tag, called a<strong>h2</strong>, that describes
          the topic within the article. The <strong>footer</strong> element is
          at the bottom of the page, below the main element. It normally
          contains the legal information, contact information, and links to
          important pages. It is always important for the footer to have the
          owner&#39;s copyright statement with the copyright symbol.
        </p>
        <h4>Anchors:</h4>
        <ol>
          <li>
            External Anchor
            <ul>
              <li>
                The anchor element links to a complete URL to a resource outside
                of the current website specified in the
                <strong>href</strong> attribute. This complete URL is also known
                as the <strong>absolute path</strong>.
              </li>
            </ul>
          </li>
          <li>
            Internal Anchor
            <ul>
              <li>
                The anchor element links from one text item to another within
                the same webpage. This is done by using the IDs specified in the
                ID attribute of the elements on the page.
              </li>
              <li>
                The href attribute within the anchor tag refers to these IDs by
                appending a hashtag to the front of the ID.
              </li>
            </ul>
          </li>
          <li>
            Page-to-page Anchor
            <ul>
              <li>
                The anchor element links to a<strong>relative URL</strong> that
                points to a location relative to the current file the user
                navigates from. That location could be within the{" "}
                <strong>same directory</strong>,
                <strong>child directories</strong>, or
                <strong>parent directories.</strong>
              </li>
            </ul>
          </li>
        </ol>
      </article>
      <article id="images">
        <h3>Optimizing Images</h3>
        <p>
          Optimizing images is important to reduce load times of a website and
          prevent filling up allotted server space. There are six specifications
          that identify optimized images, and they are the following. A{" "}
          <strong>descriptive file name</strong>, the file name improves the
          search engine optimization (SEO); it should be descriptive and
          concise. A <strong>small file size</strong>, files should be reduced
          to as small as possible to improve load times. To reduce file size,
          there are two types of images compression used.
          <strong>Lossy compression</strong> which results in pixelation (a
          blurry image) and <strong>Lossless compression</strong> which does not
          degrade the visual quality. For high resolution images, devices use
          the src set and sizes attributes to serve them to like devices. The{" "}
          <strong>exact dimensions</strong> are cropped and reduced in size to
          fit the dimensions of the space in the webpage. Providing an image
          that is too large for allotted space will create very slow load times.
          The <strong>correct file format</strong>, photos are typically .JPG,
          logos and icons are usually .GIF and sometimes 8-bit .PNG, and
          graphics with true transparency are 24-bit .PNG. In a
          <strong>reduced resolution</strong>, monitors render between 72 or
          300+ pixels per inch (ppi), the older default is 72ppi. Providing
          multiple image sizes is becoming the standard because higher
          resolutions are available. The correct <strong>color mode</strong>,
          RGB for .PNG, .JPG, .SVG, and .WebP, and Indexed for .GIF and
          sometimes PNG.
        </p>
        <p>
          <strong>GIF</strong>, <strong>PNG</strong>, and
          <strong>SVG</strong> files are typically used for line art. GIF files
          are commonly short photo/video sequences saved as animated .GIF; but
          they can also have 8-bit transparency. Their edges anti-alias to just
          a single background matte color and they are saved in indexed color
          mode. PNG files have true transparency and can be placed over any
          variety of colors without distortion. The background of these files
          shows through any blank or transparent areas. The color mode for PNG
          is typically RBG but can also be compressed in index color mode.
          Scalable Vector Graphics, also known as SVG, are mathematically
          derived and marked with XML for two-dimensional, interactive, or
          animated images.
          <strong>JPG</strong> and <strong>WebP</strong> files are typically
          used for photographs. JPG and WebP files are both able to compress
          high resolution photos so that they are not too big for the web and
          that load times are reduced. These files are compressed down to small
          file sizes and remain rectangular. Also, higher compression reduces
          image quality. WebP has the additional option to create transparent
          backgrounds with an alpha channel.
        </p>
      </article>
      <article id="favicons">
        <h3>Favicons</h3>
        <p>
          <strong>Favicons</strong> (or touch icons) are files used in the
          browser, on a smartwatch, a cellphone, a large display, or a search
          engine result list to quickly identify a website, app, or company
          logo. This file will commonly be in either .ICO, .SVG, or .PNG format
          and will be formatted. To format a favicon, you start with a symbol
          that gets modified and saved in different formats, so that it can be
          used by different browsers and devices. These files are then added to
          the HMTL file via &lt;link&gt; elements within the &lt;head&gt;.
          Depending on the user&#39;s device, the browser picks up the correct
          files and displays it to the user.
        </p>
      </article>
      <article id="css">
        <h3>Cascading Stylesheets</h3>
        <p>
          The main reasons to incorporate
          <strong> Cascading Style Sheets</strong> (CSS) in websites and apps is
          to improve usability, readability, and legibility. As well as
          determine how the website should look and behave while adhering to
          brand requirements. CSS builds on the structure provided by HTML and
          the dynamic components provided by JavaScript, providing a unique
          experience to the user.
        </p>
        <p>
          Styles can be incorporated through <strong>external</strong> CSS,
          which are external files that have a .css file extension. Stylesheets
          with global styles can be used on pages of the website through the
          &lt;link&gt; tag placed in the &lt;head&gt; of a webpage. Stylesheets
          for specific components can be linked after the global styles in the
          &lt;head&gt; area or
          <strong>imported</strong> into the global stylesheet. Also, styles can
          be <strong>embedded</strong> directly either through the &lt;style&gt;
          tag, <strong>inline</strong> via the attribute and value of an
          element, or by manipulating the Document Object Model (DOM) in{" "}
          <strong>regular JavaScript</strong>. Embedding styles is a method
          normally used for one-off style changes only, externally linked CSS
          files are the most efficient and preferred method for websites.
        </p>
      </article>
    </>
  );
}

export default TopicsPage;

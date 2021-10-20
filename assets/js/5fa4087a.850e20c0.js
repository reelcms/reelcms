(self.webpackChunkphpreel_org=self.webpackChunkphpreel_org||[]).push([[330],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,s=h(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,c=u["".concat(m,".").concat(d)]||u[d]||o[d]||l;return n?r.createElement(c,i(i({ref:t},s),{},{components:n})):r.createElement(c,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var h={};for(var m in t)hasOwnProperty.call(t,m)&&(h[m]=t[m]);h.originalType=e,h.mdxType="string"==typeof e?e:a,i[1]=h;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2830:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),i=["components"],h={},m="Theme",p={unversionedId:"components/theme",id:"components/theme",isDocsHomePage:!1,title:"Theme",description:"Theme::existsChildView($view)",source:"@site/docs/components/theme.md",sourceDirName:"components",slug:"/components/theme",permalink:"/components/theme",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ResourceHandler",permalink:"/components/resource-handler"},next:{title:"UrlRoutes",permalink:"/components/url-routes"}},s=[{value:"Theme::existsChildView($view)",id:"themeexistschildviewview",children:[]},{value:"Theme::getActiveTheme()",id:"themegetactivetheme",children:[]},{value:"Theme::getFilePath($path)",id:"themegetfilepathpath",children:[]},{value:"Theme::view($path, $data)",id:"themeviewpath-data",children:[]},{value:"Theme::getThemes()",id:"themegetthemes",children:[]},{value:"Theme::getBaseThemes()",id:"themegetbasethemes",children:[]},{value:"Theme::getThemesDetails($themes)",id:"themegetthemesdetailsthemes",children:[]},{value:"Theme::getConfig($theme)",id:"themegetconfigtheme",children:[]},{value:"Theme::getCover($theme)",id:"themegetcovertheme",children:[]},{value:"Theme::generateChildTheme($theme)",id:"themegeneratechildthemetheme",children:[]},{value:"Theme::getDefaultThemeDirectories()",id:"themegetdefaultthemedirectories",children:[]},{value:"Theme::createFiles($directories, $path)",id:"themecreatefilesdirectories-path",children:[]},{value:"Theme::generateConfig($theme, $themeName, $description, $author, $themeUrl, $version, $license, $licenseUrl)",id:"themegenerateconfigtheme-themename-description-author-themeurl-version-license-licenseurl",children:[]},{value:"Theme::generateDefaultCover($theme)",id:"themegeneratedefaultcovertheme",children:[]},{value:"Theme::findTheme($theme)",id:"themefindthemetheme",children:[]},{value:"Theme::deleteTheme($theme)",id:"themedeletethemetheme",children:[]}],o={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"theme"},"Theme"),(0,l.kt)("h2",{id:"themeexistschildviewview"},"Theme::existsChildView($view)"),(0,l.kt)("p",null,"Returns true if a child view exists and false if there is not a child view."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"$view")," Required string, path to the view to be checked")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Returns bool"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/Theme.php"',title:'"/app/Helpers/Theme/Theme.php"'},"use Theme;\n\n...\n\n//Checks if the show.blade.php view exists in the child theme or not\nTheme::existsChildView('show');\n\n")),(0,l.kt)("h2",{id:"themegetactivetheme"},"Theme::getActiveTheme()"),(0,l.kt)("p",null,"Checks if there is a child theme defined, if not then it returns the active theme, else it's child theme."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Returns string")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/Theme.php"',title:'"/app/Helpers/Theme/Theme.php"'},"use Theme;\n\n...\n\nTheme::getActiveTheme();\n\n")),(0,l.kt)("h2",{id:"themegetfilepathpath"},"Theme::getFilePath($path)"),(0,l.kt)("p",null,"Returns the file path of a file either from the theme or child theme. This should be used for anything that is not a view."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$path")," Required string, path to the file to be checked (starting from theme root)"),(0,l.kt)("li",{parentName:"ul"},"Returns string")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/Theme.php"',title:'"/app/Helpers/Theme/Theme.php"'},'use Theme;\n\n...\n\nTheme::getFilePath("css/style.css");\n\n')),(0,l.kt)("h2",{id:"themeviewpath-data"},"Theme::view($path, $data)"),(0,l.kt)("p",null,"Returns a specific view. If there is a file with the same name in the child theme folder then that file will be returned, else it will return the file from the actual theme directory. Very similar to what view does in Laravel."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$path")," Required string, path to the view to be rendered"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$data")," Required array, data to be passed to the view"),(0,l.kt)("li",{parentName:"ul"},"Returns global view helper ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/Theme.php"',title:'"/app/Helpers/Theme/Theme.php"'},"use Theme;\n\n...\n\nTheme::view(\"show\", [\n    'movie' => $movie,\n    'subscribed' => true\n]);\n\n")),(0,l.kt)("h2",{id:"themegetthemes"},"Theme::getThemes()"),(0,l.kt)("p",null,"Returns all the available themes and child themes."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Returns array")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/Theme.php"',title:'"/app/Helpers/Theme/Theme.php"'},"use Theme;\n\n...\n\nTheme::getThemes();\n\n")),(0,l.kt)("h2",{id:"themegetbasethemes"},"Theme::getBaseThemes()"),(0,l.kt)("p",null,"Returns all the available base themes (not child themes)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Returns array")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/Theme.php"',title:'"/app/Helpers/Theme/Theme.php"'},"use Theme;\n\n...\n\nTheme::getBaseThemes();\n\n")),(0,l.kt)("h2",{id:"themegetthemesdetailsthemes"},"Theme::getThemesDetails($themes)"),(0,l.kt)("p",null,"Returns all the details for a given array of themes."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$themes")," Required array, list of the themes we are requesting details for"),(0,l.kt)("li",{parentName:"ul"},"Returns array")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/Theme.php"',title:'"/app/Helpers/Theme/Theme.php"'},"use Theme;\n\n...\n\nTheme::getThemesDetails(['default', 'amazingTheme']);\n\n")),(0,l.kt)("h2",{id:"themegetconfigtheme"},"Theme::getConfig($theme)"),(0,l.kt)("p",null,"Returns the config.json file from the theme."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$theme")," Required string, name of the theme"),(0,l.kt)("li",{parentName:"ul"},"Returns array")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/Theme.php"',title:'"/app/Helpers/Theme/Theme.php"'},"use Theme;\n\n...\n\nTheme::getConfig('default');\n\n")),(0,l.kt)("h2",{id:"themegetcovertheme"},"Theme::getCover($theme)"),(0,l.kt)("p",null,"Returns URL to the cover image from the theme folder."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$theme")," Required string, name of the theme"),(0,l.kt)("li",{parentName:"ul"},"Returns string")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/Theme.php"',title:'"/app/Helpers/Theme/Theme.php"'},"use Theme;\n\n...\n\nTheme::getCover('default');\n\n")),(0,l.kt)("h2",{id:"themegeneratechildthemetheme"},"Theme::generateChildTheme($theme)"),(0,l.kt)("p",null,"Generates the child theme directory and it's subdirectories for the specified theme."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$theme")," Required string, name of the theme")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/Theme.php"',title:'"/app/Helpers/Theme/Theme.php"'},"use Theme;\n\n...\n\nTheme::generateChildTheme('default');\n\n")),(0,l.kt)("h2",{id:"themegetdefaultthemedirectories"},"Theme::getDefaultThemeDirectories()"),(0,l.kt)("p",null,"Returns an array containing the basic structure of a theme."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Returns array")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/Theme.php"',title:'"/app/Helpers/Theme/Theme.php"'},"use Theme;\n\n...\n\nTheme::getDefaultThemeDirectories();\n\n")),(0,l.kt)("h2",{id:"themecreatefilesdirectories-path"},"Theme::createFiles($directories, $path)"),(0,l.kt)("p",null,"Generates the theme files and directories (if they do not exist) based on the directories array. This usually is used with ",(0,l.kt)("inlineCode",{parentName:"p"},"Theme::getDefaultThemeDirectories()")," as shown in the example bellow."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$directories")," Required array, key-value pairs, where the key is the name of the directory and the pairs are arrays of strings representing the files present in those directories. If the array is left empty in means that the directory is empty."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$directories")," Required string, path to where to store the files and directories.")),(0,l.kt)("p",null,"This is how the ",(0,l.kt)("inlineCode",{parentName:"p"},"$directories")," array might look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$directories = [\n    'auth' => ['forgot-password.blade.php', 'login.blade.php', 'register.blade.php', 'reset-password.blade.php'], \n    'categories' => ['cast.blade.php', 'genre.blade.php', 'rating.blade.php', 'release.blade.php'], \n    'css' => [], \n    'episodes' => ['show.blade.php'], \n    'home' => ['home.blade.php'],\n    'error' => ['error.blade.php'],\n    'img' => [], \n    'js' => [], \n    'lang' => ['default' => ['default.json']], \n    'layouts' => ['layout.blade.php'], \n    'movie' => ['index.blade.php', 'show.blade.php'], \n    'pagination' => ['simple-pagination.blade.php'], \n    'search' => ['index.blade.php'], \n    'series' => ['index.blade.php', 'show.blade.php'], \n    'subscribe' => ['index.blade.php'], \n    'trailer' => ['show.blade.php'], \n    'user' => ['index.blade.php']\n];\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/Theme.php"',title:'"/app/Helpers/Theme/Theme.php"'},"use Theme;\n\n...\n\nTheme::createFiles(Theme::getDefaultThemeDirectories(), 'themes/default');\n\n")),(0,l.kt)("h2",{id:"themegenerateconfigtheme-themename-description-author-themeurl-version-license-licenseurl"},"Theme::generateConfig($theme, $themeName, $description, $author, $themeUrl, $version, $license, $licenseUrl)"),(0,l.kt)("p",null,"Generates the config file for a new theme."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$theme")," Required string, name of the directory where the theme will be saved ",(0,l.kt)("inlineCode",{parentName:"li"},"themes\\$theme")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$themeName")," Required string, name that will be displayed in the dashboard theme section"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$description")," Required string, description of the theme"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$author")," Required string, author of the theme"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$themeUrl")," Required string, URL to a webpage dedicated to the theme"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$version")," Required string, current version of the theme"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$license")," Required string, license used by the theme (MIT, BSD, ...)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$licenseUrl")," Required string, URL to the license contents")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/Theme.php"',title:'"/app/Helpers/Theme/Theme.php"'},"use Theme;\n\n...\n\nTheme::generateConfig('default', 'Default theme', 'Amazing description', 'Paul Balan', 'phpreel.org', '1.0.0', 'MIT', 'https://github.com/phpreel/phpreel/blob/main/LICENSE');\n\n")),(0,l.kt)("h2",{id:"themegeneratedefaultcovertheme"},"Theme::generateDefaultCover($theme)"),(0,l.kt)("p",null,"Generates the default cover image."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$theme")," Required string, name of the theme")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/Theme.php"',title:'"/app/Helpers/Theme/Theme.php"'},"use Theme;\n\n...\n\nTheme::generateDefaultCover('default');\n\n")),(0,l.kt)("h2",{id:"themefindthemetheme"},"Theme::findTheme($theme)"),(0,l.kt)("p",null,"Returns true if a theme is found, false if not."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$theme")," Required string, name of the theme to search for"),(0,l.kt)("li",{parentName:"ul"},"Returns bool")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/Theme.php"',title:'"/app/Helpers/Theme/Theme.php"'},"use Theme;\n\n...\n\nTheme::findTheme('default');\n\n")),(0,l.kt)("h2",{id:"themedeletethemetheme"},"Theme::deleteTheme($theme)"),(0,l.kt)("p",null,"Removes the theme from themes folder. Returns true if succeeds, false if not."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$theme")," Required string, name of the theme to search for"),(0,l.kt)("li",{parentName:"ul"},"Returns bool")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Theme/Theme.php"',title:'"/app/Helpers/Theme/Theme.php"'},"use Theme;\n\n...\n\nTheme::deleteTheme('default');\n\n")))}u.isMDXComponent=!0}}]);
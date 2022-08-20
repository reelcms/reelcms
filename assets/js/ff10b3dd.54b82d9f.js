(self.webpackChunkphpreel_org=self.webpackChunkphpreel_org||[]).push([[596],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3075:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=r(2122),n=r(9756),l=(r(7294),r(3905)),o=["components"],i={},u="ResourceHandler",s={unversionedId:"components/resource-handler",id:"components/resource-handler",isDocsHomePage:!1,title:"ResourceHandler",description:"ResourceHandler::getLocalStorage()",source:"@site/docs/components/resource-handler.md",sourceDirName:"components",slug:"/components/resource-handler",permalink:"/components/resource-handler",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PlanHandler",permalink:"/components/plan-handler"},next:{title:"Theme",permalink:"/components/theme"}},p=[{value:"ResourceHandler::getLocalStorage()",id:"resourcehandlergetlocalstorage",children:[]},{value:"ResourceHandler::getExternalStorage()",id:"resourcehandlergetexternalstorage",children:[]},{value:"ResourceHandler::checkPremium($fileName, $storage)",id:"resourcehandlercheckpremiumfilename-storage",children:[]},{value:"ResourceHandler::addImage($fileName)",id:"resourcehandleraddimagefilename",children:[]},{value:"ResourceHandler::addVideo($fileName, $storage, $premium = 1, $auth = 1)",id:"resourcehandleraddvideofilename-storage-premium--1-auth--1",children:[]},{value:"ResourceHandler::delete($fileName, $storage)",id:"resourcehandlerdeletefilename-storage",children:[]},{value:"ResourceHandler::updateVideo($fileName, $videoId, $storage, $premium = 1, $auth = 1)",id:"resourcehandlerupdatevideofilename-videoid-storage-premium--1-auth--1",children:[]},{value:"ResourceHandler::updateImage($fileName, $imageId, $storage)",id:"resourcehandlerupdateimagefilename-imageid-storage",children:[]},{value:"ResourceHandler::getAccessAvailabilityVideo($fileName)",id:"resourcehandlergetaccessavailabilityvideofilename",children:[]}],d={toc:p};function c(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"resourcehandler"},"ResourceHandler"),(0,l.kt)("h2",{id:"resourcehandlergetlocalstorage"},"ResourceHandler::getLocalStorage()"),(0,l.kt)("p",null,"Returns all the available local storage mediums (local, s3)."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'It might be a bit confusing but here getLocalStorage() doesn\'t mean "storage on the same server as phpReel". It simply means that you store the content yourself and have access to the actual stored content.')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Returns array")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Resource/ResourceHandler.php"',title:'"/app/Helpers/Resource/ResourceHandler.php"'},"use App\\Helpers\\Resource\\ResourceHandler;\n\n...\n\n//This will return ['local', 's3']\nResourceHandler::getLocalStorage();\n\n")),(0,l.kt)("h2",{id:"resourcehandlergetexternalstorage"},"ResourceHandler::getExternalStorage()"),(0,l.kt)("p",null,"Returns all the available external storage mediums (youtube, vimeo)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Returns array")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Resource/ResourceHandler.php"',title:'"/app/Helpers/Resource/ResourceHandler.php"'},"use App\\Helpers\\Resource\\ResourceHandler;\n\n...\n\n//This will return ['youtube', 'vimeo']\nResourceHandler::getExternalStorage();\n\n")),(0,l.kt)("h2",{id:"resourcehandlercheckpremiumfilename-storage"},"ResourceHandler::checkPremium($fileName, $storage)"),(0,l.kt)("p",null,"Returns true if video is premium, false if not, null if it doesn't exist."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A video is considered to be premium if you need an active subscription to watch it.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$fileName")," Required string, name of the stored file (different from the name the file it had when you uploaded it)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$storage")," Required string, storage type used when the file was stored (local, s3)"),(0,l.kt)("li",{parentName:"ul"},"Returns bool")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Resource/ResourceHandler.php"',title:'"/app/Helpers/Resource/ResourceHandler.php"'},"use App\\Helpers\\Resource\\ResourceHandler;\n\n...\n\nResourceHandler::checkPremium('video.mp4', 's3');\n\n")),(0,l.kt)("h2",{id:"resourcehandleraddimagefilename"},"ResourceHandler::addImage($fileName)"),(0,l.kt)("p",null,"Add a image resource to the database. Return the id of the new row from the image table."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This method doesn't save the actual image, it's used to register the uploaded image to the database so you can keep track of it.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$fileName")," Required string, name of the stored image (different from the name the file it had when you uploaded it)"),(0,l.kt)("li",{parentName:"ul"},"Returns int")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Resource/ResourceHandler.php"',title:'"/app/Helpers/Resource/ResourceHandler.php"'},"use App\\Helpers\\Resource\\ResourceHandler;\n\n...\n\nResourceHandler::addImage('image.jpeg');\n\n")),(0,l.kt)("h2",{id:"resourcehandleraddvideofilename-storage-premium--1-auth--1"},"ResourceHandler::addVideo($fileName, $storage, $premium = 1, $auth = 1)"),(0,l.kt)("p",null,"Add a video resource to the database. Return the id of the new row from the video table."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This method doesn't save the actual video, it's used to register the uploaded video to the database so you can keep track of it.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$fileName")," Required string, name of the stored video (different from the name the file it had when you uploaded it)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$storage")," Required string, storage type used to store the video (local, s3, youtube, vimeo)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$premium")," Optional int, by default every video is saved as premium (0=non premium, 1=premium)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$auth")," Optional int, by default every video requires auth (0=no auth required, 1=requires auth)"),(0,l.kt)("li",{parentName:"ul"},"Returns int")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"$premium")," tells phpReel if a certain video requires an active subscription to be streamed while ",(0,l.kt)("inlineCode",{parentName:"p"},"$auth")," tells if the user must be logged in or not. You can not set a video that is both ",(0,l.kt)("inlineCode",{parentName:"p"},"$premium = 1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"$auth = 0"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Resource/ResourceHandler.php"',title:'"/app/Helpers/Resource/ResourceHandler.php"'},"use App\\Helpers\\Resource\\ResourceHandler;\n\n...\n\nResourceHandler::addVideo('video.mp4', 's3');\n\n")),(0,l.kt)("h2",{id:"resourcehandlerdeletefilename-storage"},"ResourceHandler::delete($fileName, $storage)"),(0,l.kt)("p",null,"Deletes a specific resource (video, image)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$fileName")," Required string, name of the stored resource to be deleted (different from the name the file it had when you uploaded it)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$storage")," Required string, storage type used to store the video (local, s3)"),(0,l.kt)("li",{parentName:"ul"},"Returns Illuminate\\Support\\Facades\\Storage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Resource/ResourceHandler.php"',title:'"/app/Helpers/Resource/ResourceHandler.php"'},"use App\\Helpers\\Resource\\ResourceHandler;\n\n...\n\nResourceHandler::delete('video.mp4', 's3');\n\n")),(0,l.kt)("h2",{id:"resourcehandlerupdatevideofilename-videoid-storage-premium--1-auth--1"},"ResourceHandler::updateVideo($fileName, $videoId, $storage, $premium = 1, $auth = 1)"),(0,l.kt)("p",null,"Update a video resource from the database."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This method doesn't update the actual video, it's used to register the uploaded video to the database so you can keep track of it.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$fileName")," Required string, name of the new stored video (different from the name the file it had when you uploaded it)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$videoId")," Required int, id of the database row that contains that specific video to be updated"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$storage")," Required string, new storage type used to store the video (local, s3, youtube, vimeo)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$premium")," Optional int, by default every video is saved as premium (0=non premium, 1=premium)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$auth")," Optional int, by default every video requires auth (0=no auth required, 1=requires auth)")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"$premium")," tells phpReel if a certain video requires an active subscription to be streamed while ",(0,l.kt)("inlineCode",{parentName:"p"},"$auth")," tells if the user must be logged in or not. You can not set a video that is both ",(0,l.kt)("inlineCode",{parentName:"p"},"$premium = 1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"$auth = 0"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Resource/ResourceHandler.php"',title:'"/app/Helpers/Resource/ResourceHandler.php"'},"use App\\Helpers\\Resource\\ResourceHandler;\n\n...\n\nResourceHandler::updateVideo('video.mp4', 5, 'local', 0, 0);\n\n")),(0,l.kt)("h2",{id:"resourcehandlerupdateimagefilename-imageid-storage"},"ResourceHandler::updateImage($fileName, $imageId, $storage)"),(0,l.kt)("p",null,"Update a image resource from the database."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This method doesn't update the actual image, it's used to register the uploaded image to the database so you can keep track of it.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$fileName")," Required string, name of the new stored image (different from the name the file it had when you uploaded it)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$imageId")," Required int, id of the database row that contains that specific image to be updated"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$storage")," Required string, new storage type used to store the image (local, s3)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Resource/ResourceHandler.php"',title:'"/app/Helpers/Resource/ResourceHandler.php"'},"use App\\Helpers\\Resource\\ResourceHandler;\n\n...\n\nResourceHandler::updateImage('image.jpg', 10, 'local');\n\n")),(0,l.kt)("h2",{id:"resourcehandlergetaccessavailabilityvideofilename"},"ResourceHandler::getAccessAvailabilityVideo($fileName)"),(0,l.kt)("p",null,"Return the values stored in the premium and auth fields of a video."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$fileName")," Required string, name of the video resource (different from the name the file it had when you uploaded it)"),(0,l.kt)("li",{parentName:"ul"},"Returns array")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Helpers/Resource/ResourceHandler.php"',title:'"/app/Helpers/Resource/ResourceHandler.php"'},"use App\\Helpers\\Resource\\ResourceHandler;\n\n...\n\nResourceHandler::getAccessAvailabilityVideo('video.mp4');\n\n")))}c.isMDXComponent=!0}}]);
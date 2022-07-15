"use strict";(self.webpackChunkflash_list=self.webpackChunkflash_list||[]).push([[79],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(l,".").concat(d)]||c[d]||p[d]||i;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1114:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"layout-animation",title:"LayoutAnimation"},l=void 0,u={unversionedId:"guides/layout-animation",id:"guides/layout-animation",title:"LayoutAnimation",description:"LayoutAnimation is a popular way how to animate views in React Native.",source:"@site/docs/guides/layout-animation.md",sourceDirName:"guides",slug:"/guides/layout-animation",permalink:"/flash-list/docs/guides/layout-animation",editUrl:"https://github.com/shopify/flash-list/edit/main/docusaurus/docs/guides/layout-animation.md",tags:[],version:"current",lastUpdatedBy:"Arjan Zuidema",lastUpdatedAt:1657928061,formattedLastUpdatedAt:"7/15/2022",frontMatter:{id:"layout-animation",title:"LayoutAnimation"},sidebar:"autoSidebar",previous:{title:"Writing performant components",permalink:"/flash-list/docs/fundamentals/performant-components"},next:{title:"Manual linking",permalink:"/flash-list/docs/guides/manual-linking"}},m=[{value:"Example",id:"example",children:[],level:2}],p={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/layoutanimation"},(0,i.kt)("inlineCode",{parentName:"a"},"LayoutAnimation"))," is a popular way how to animate views in React Native."),(0,i.kt)("p",null,"FlashList does support ",(0,i.kt)("inlineCode",{parentName:"p"},"LayoutAnimation"),"s but you need to call ",(0,i.kt)("a",{parentName:"p",href:"/usage#prepareforlayoutanimationrender"},(0,i.kt)("inlineCode",{parentName:"a"},"prepareLayoutAnimationRender()"))," before React Native's ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/layoutanimation#configurenext"},(0,i.kt)("inlineCode",{parentName:"a"},"LayoutAnimation.configureNext")),". ",(0,i.kt)("inlineCode",{parentName:"p"},"prepareLayoutAnimationRender")," is an instance method, so you have to keep a reference to your ",(0,i.kt)("inlineCode",{parentName:"p"},"FlashList")," instance via the ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},(0,i.kt)("inlineCode",{parentName:"a"},"ref"))," prop:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"// This must be called before `LayoutAnimation.configureNext` in order for the animation to run properly.\nlistRef.current?.prepareForLayoutAnimationRender();\n// After removing the item, we can start the animation.\nLayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);\n")),(0,i.kt)("p",null,"For the animation to work properly, you additionally need to add ",(0,i.kt)("a",{parentName:"p",href:"/usage#keyextractor"},(0,i.kt)("inlineCode",{parentName:"a"},"keyExtractor"))," prop to your ",(0,i.kt)("inlineCode",{parentName:"p"},"FlashList")," component if you have not already done so."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"LayoutAnimation")," is experimental on Android, so we cannot guarantee its stability when used with ",(0,i.kt)("inlineCode",{parentName:"p"},"FlashList"),"."))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useRef, useState } from "react";\nimport { View, Text, Pressable, LayoutAnimation } from "react-native";\nimport { FlashList } from "@shopify/flash-list";\n\nconst List = () => {\n  const [data, setData] = useState([1, 2, 3, 4, 5]);\n\n  const list = useRef<FlashList<number> | null>(null);\n\n  const removeItem = (item: number) => {\n    setData(\n      data.filter((dataItem) => {\n        return dataItem !== item;\n      })\n    );\n    // This must be called before `LayoutAnimation.configureNext` in order for the animation to run properly.\n    list.current?.prepareForLayoutAnimationRender();\n    // After removing the item, we can start the animation.\n    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);\n  };\n\n  const renderItem = ({ item }: { item: number }) => {\n    return (\n      <Pressable\n        onPress={() => {\n          removeItem(item);\n        }}\n      >\n        <View>\n          <Text>Cell Id: {item}</Text>\n        </View>\n      </Pressable>\n    );\n  };\n\n  return (\n    <FlashList\n      // Saving reference to the `FlashList` instance to later trigger `prepareForLayoutAnimationRender` method.\n      ref={list}\n      // This prop is necessary to uniquely identify the elements in the list.\n      keyExtractor={(item: number) => {\n        return item.toString();\n      }}\n      renderItem={renderItem}\n      estimatedItemSize={100}\n      data={data}\n    />\n  );\n};\n\nexport default List;\n')))}c.isMDXComponent=!0}}]);
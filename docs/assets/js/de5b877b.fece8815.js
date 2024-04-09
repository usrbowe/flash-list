"use strict";(self.webpackChunkflash_list=self.webpackChunkflash_list||[]).push([[554],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2194:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"reanimated",title:"React Native Reanimated"},l=void 0,c={unversionedId:"guides/reanimated",id:"guides/reanimated",title:"React Native Reanimated",description:"React Native Reanimated is an alternative animation library to the LayoutAnimation API provided by React Native.",source:"@site/docs/guides/reanimated.md",sourceDirName:"guides",slug:"/guides/reanimated",permalink:"/flash-list/docs/guides/reanimated",editUrl:"https://github.com/Shopify/flash-list/blob/main/documentation/docs/guides/reanimated.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1712680974,formattedLastUpdatedAt:"4/9/2024",frontMatter:{id:"reanimated",title:"React Native Reanimated"},sidebar:"autoSidebar",previous:{title:"Masonry Layout",permalink:"/flash-list/docs/guides/masonry"},next:{title:"SectionList",permalink:"/flash-list/docs/guides/section-list"}},u=[{value:"Layout Animations",id:"layout-animations",children:[],level:2},{value:"Hooks",id:"hooks",children:[{value:"Usage",id:"usage",children:[],level:3},{value:"Performance",id:"performance",children:[],level:3}],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.reanimated2.com/"},"React Native Reanimated")," is an alternative animation library to the ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/layoutanimation"},(0,i.kt)("inlineCode",{parentName:"a"},"LayoutAnimation"))," API provided by React Native."),(0,i.kt)("p",null,"We support view animations and most of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/layout_animations/"},"layout animations"),"."),(0,i.kt)("h2",{id:"layout-animations"},"Layout Animations"),(0,i.kt)("p",null,"For layout animations, similarly to the React Native API, you need to call ",(0,i.kt)("a",{parentName:"p",href:"/usage#prepareforlayoutanimationrender"},(0,i.kt)("inlineCode",{parentName:"a"},"prepareLayoutAnimationRender()"))," before removing or inserting an element that you want to animate. Note that we currently support only ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/api/LayoutAnimations/entryAnimations"},"entering")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/api/LayoutAnimations/exitAnimations"},"exiting")," animations. ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://docs.swmansion.com/react-native-reanimated/docs/api/LayoutAnimations/layoutTransitions"},"Layout transitions")," are not supported")," as of now."),(0,i.kt)("h2",{id:"hooks"},"Hooks"),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"You can use hooks such as ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/api/hooks/useSharedValue"},(0,i.kt)("inlineCode",{parentName:"a"},"useSharedValue"))," as you would in a normal view. The difference is that since views get recycled, a value can transfer to an unrelated component. You will need to reset such values when a view is recycled - for this, you can pass a prop that uniquely identifies the cell (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of an item) and run a callback via ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect"),". You can take inspiration from the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useEffect } from "react";\nimport Animated, { useSharedValue } from "react-native-reanimated";\nimport { FlashList } from "@shopify/flash-list";\n\nconst MyList = () => {\n  const Item = ({ item }: { item: { id: string } }) => {\n    const myValue = useSharedValue(0);\n    useEffect(() => {\n      // Reset value when id changes (view was recycled for another item)\n      myValue.value = 0;\n    }, [item.id, myValue]);\n    return <Animated.View />;\n  };\n\n  return <FlashList renderItem={Item} estimatedItemSize={100} />;\n};\n')),(0,i.kt)("h3",{id:"performance"},"Performance"),(0,i.kt)("p",null,"If you use hooks that accept a dependencies array, make sure to leverage it and include only the minimal set of dependencies."))}d.isMDXComponent=!0}}]);
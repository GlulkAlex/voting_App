//"use strict";
//Uncaught SyntaxError: Unexpected token import
//import Vue from 'vue';
/*
import Router from 'vue-router';
import { domain, fromNow } from './filters';
import App from './components/App.vue';
import NewsView from './components/NewsView.vue';
import ItemView from './components/ItemView.vue';
import UserView from './components/UserView.vue';
*/
/*
ReferenceError: require is not defined
path ?
// Using CommonJS
var Chart = require('src/chart.js');

var myChart = new Chart({...});

// ES6
import Chart from 'src/chart.js';
let myChart = new Chart({...});

// Using requirejs
require(['path/to/Chartjs'], function(Chart){
 var myChart = new Chart({...});
})
*/

// Code goes here

/*
example | reference routing:
app.com/polls/ <- home page (all pools)
app.com/polls/kMYqry4KfqW7oQher <- poll_ID page
app.com/mypolls <- user's pools only page
app.com/newpoll <- new poll constructor form page
*/

/**
 * names convention | converter
 * 'current-poll-item'.split("-").map(el=>el[0].toUpperCase() + el.slice(1)).join("_")
 * "Page_Header".toLowerCase().replace("_", "-")
*/
var is_Debug_Mode = (
  //false
  true
);
Vue.config.debug = is_Debug_Mode;

var data = {
  message: 'Hello Vue.js!'
  ,todos: [
    { text: 'Add some todos' }
    ,{ text: 'Learn JavaScript' },
    { text: 'Learn Vue.js' },
    { text: 'Build Something Awesome' }
  ]
};

var color_Names = [
  "red", "pink", "purple"
  , "deep-purple", "indigo", "blue"
  , "light-blue", "cyan", "aqua"
  , "teal", "green", "light-green"
  , "lime", "sand", "khaki"
  , "yellow", "amber", "orange"
  , "deep-orange", "blue-grey", "brown"
  , "light-grey", "grey", "dark-grey"
  , "black"
];
var backGround_Color_Class_Names = [
  "w3-red", "w3-pink", "w3-purple"
  , "w3-deep-purple", "w3-indigo", "w3-blue"
  , "w3-light-blue", "w3-cyan", "w3-aqua"
  , "w3-teal", "w3-green"
  , "w3-light-green", "w3-lime", "w3-sand"
  , "w3-khaki", "w3-yellow", "w3-amber"
  , "w3-orange", "w3-deep-orange", "w3-blue-grey"
  , "w3-brown", "w3-light-grey"
  , "w3-grey", "w3-dark-grey", "w3-black"
];
var main_Page_Data = {
  is_Sign_In: (
    //true
    false
  )
};

var user_Polls_Page_Data = {
  User: 1
};

var polls_Data = {
  polls: [
    { caption: 'Poll 1', user: 1 }
    ,{ caption: 'Poll 2', user: 2 }
    ,{ caption: 'Poll 3', user: 3 }
    ,{ caption: 'Poll 4', user: 1 }
  ]
};

var poll_1_Vote_Options = [
  {option_Name: 1, votes: 1}
  , {option_Name: "one", votes: 2}
  , {option_Name: "Me too", votes: 3}
  , {option_Name: "Not sure", votes: 9}
];

var nav_Bar_Home = [
  '<li class="w3-right">'
    ,'<a href="#" title="to Home | Start page">'
      ,'<i class="fa fa-home w3-large"></i>Home'
    ,'</a>'
  ,'</li>'
].join("");
var nav_Bar_Sign_In = [
  '<li v-if="false" class="w3-right">'
    ,'<a href="#" class="w3-btn w3-round w3-blue" title="Sign In">'
      ,'<i class="fa fa-twitter"></i>'
      ,'<i class="fa fa-sign-in w3-large"></i>'
    ,'</a>'
  ,'</li>'
].join("");
var nav_Bar_Sign_Out = [
  '<li class="w3-dropdown-hover w3-right">'
    ,'<a href="#">'
      ,'<i class="fa fa-power-off w3-text-blue"></i>'
      ,'UserName'
      ,'<i class="fa fa-caret-down"></i>'
    ,'</a>'
    ,'<div class="w3-dropdown-content w3-white w3-card-4">'
      ,'<a href="#" class="w3-btn w3-round w3-blue" title="Sign Out">'
      ,'<i class="fa fa-sign-out w3-large"></i>Sign Out</a>'
    ,'</div>'
  ,'</li>'
].join("");
var nav_Bar_User_Pools = [
  '<li class="w3-right">'
    ,'<a href="#" title="Show created polls">My Polls</a>'
  ,'</li>'
].join("");
var nav_Bar_New_Pool = [
  '<li class="w3-right">'
    ,'<a href="#" title="Create new poll">New Poll</a>'
  ,'</li>'
].join("");
// define
var Page_Header = Vue.extend({
  template: [
    //'<header class="w3-top">'
    //'<nav class="w3-top">'
    '<nav class="w3-container">'
    ,'<ul class="w3-navbar w3-light-grey w3-border w3-large">'
      // unauthorized
      ,'<li><a class="w3-green w3-rest" href="#" title="return to Home page | Start">'
      ,'<i class="material-icons w3-large">home</i>voting app</a></li>'
      // fa fa-sign-in | fa fa-sign-out
      // twitter-share-button <- CSS selector ?
      // unauthorized | conditional
      ,nav_Bar_Sign_In
      // authorized | conditional
      ,nav_Bar_Sign_Out
      ,nav_Bar_New_Pool
      ,nav_Bar_User_Pools
      ,nav_Bar_Home
    ,'</ul>'
    ,'</nav>'
  ].join("")
  //.join("\n")
});

//"Page_Header".toLowerCase().replace("_", "-")
//"page-header"
// register
//Vue.component('page-header', Page_Header);

// define
// a fragment instance (has: v-if)
var All_Polls_Header = Vue.extend({
  // declare the props
  props: {
    //['is_Sign_In']
    is_Sign_In: {
      type: Boolean
      ,required: true
      ,default: (
        true
        //false
      )
    },
  }
  ,template: [
    '<h1>voting polls list</h1>'
    ,'<p>hosted by voting app.</p>'
    ,'<p>Select a poll <wbr>to see the results and vote, or <wbr>'
      // conditional
      ,'<a v-if="is_Sign_In" href="#" title="new poll item constructor">'
        ,'make a new poll'
      ,'</a>'
      // conditional
      ,'<span v-else>sign-in to make a new poll</span>'
    ,'.</p>'
  ].join("")
  // data works, but props fail ? need to check parent data
  /*
  ,data: function () {
    return main_Page_Data;
  }
  */
});

// define
// a fragment instance (has: v-for)
var Polls_List = Vue.extend({
  template: [
    //'<all-posts-header></all-posts-header>'
    '<ul class="w3-ul w3-light-grey w3-border" v-for="poll in polls">'
    //v-bind:item="item" v-bind:index="$index"
      ,'<li><a href="#" title="poll item">{{poll.caption}}</a></li>'
    ,'</ul>'
  ].join("")
  //.join("\n")
  /*
  ,components: {
    'all-posts-header': All_Posts_Header
  }
  */
  /*,el: function () {
    return '#app';
  }*/
  ,data: function () {
    return polls_Data;
  }
});

// define
// a fragment instance (has: v-if)
var User_Polls_Header = Vue.extend({
  // declare the props
  /*
  props: {
    //['is_Sign_In']
    is_Sign_In: {
      type: Boolean
      ,required: true
      ,default: (
        true
        //false
      )
    },
  }
  */
  template: [
    '<h1>Your own voting polls list.</h1>'
    ,'<p>Select a poll <wbr>to see the results and vote, or <wbr>'
      ,'<a href="#" title="new poll item constructor">'
        ,'make a new poll'
      ,'</a>'
    ,'.</p>'
  ].join("")
  // data works, but props fail ? need to check parent data
  /*
  ,data: function () {
    return main_Page_Data;
  }
  */
});

// define
// a fragment instance (has: v-for)
var User_Polls_List = Vue.extend({
  template: [
    //'<all-posts-header></all-posts-header>'
    '<ul class="w3-ul w3-light-grey w3-border" v-for="poll in polls | filterBy User">'
    //v-bind:item="item" v-bind:index="$index"
      ,'<li>'
        ,'<a href="#" title="poll item">{{poll.caption}} {{poll.user}} {{User}}</a>'
      ,'</li>'
    ,'</ul>'
  ].join("")
  //.join("\n")
  /*
  ,components: {
    'all-posts-header': All_Posts_Header
  }
  */
  /*,el: function () {
    return '#app';
  }*/
  //,props: ['User']
  ,props: {
    User: {
      type: Number
      ,required: true
      ,default: 2
    },
  }
  ,data: function () {
    return polls_Data;
  }
});

// register
//Vue.component('polls-list', Polls_List)

// define
var Page_Footer = Vue.extend({
  template: [
    '<footer class="w3-bottom">'
    ,'<p>built by <a href="https://www.freecodecamp.com/glulkalex">@GlukAlex</a>, <br>'
    ,'according to <wbr>the User Story requirements from <wbr>'
    ,'"Free Code Camp\'s Dynamic Web Application Projects: <wbr>'
    ,'<a href="https://www.freecodecamp.com/challenges/build-a-voting-app" '
    ,'title="Free Code Camp\'s task | challenge: Build a Voting App">'
    ,'Build a Voting App".</a><wbr>'
    ,'<br>Github repository: <wbr>'
    ,'<a href="https://github.com/GlulkAlex/voting_App">voting_App</a></p>'
    ,'</footer>'
  ].join("")
});

// register
//Vue.component('page-footer', Page_Footer)

// app.com/polls route
var Home_Page = Vue.extend({
  template: [
    '<!-- (child | children) components outlets -->'
    ,'<page-header></page-header>'
    ,'<all-polls-header></all-polls-header>'
    ,'<polls-list></polls-list>'
    ,'<page-footer></page-footer>'
  ].join("")
  ,components: {
    // <my-component> will only be available in Parent's template
    ///>>> constant | always present(ed) part <<<///
    'page-header': Page_Header
    ///>>> variable | content changed depending on current route part <<<///
    ,'polls-list': Polls_List
    //,'all-polls-list': All_Polls_List // <- 'all-polls-header' + 'polls-list'
    ,'all-polls-header': All_Polls_Header
    //,'user-polls-list': User_Polls_List // <- 'user-polls-header' + filtered 'polls-list'
    //'current_poll_item'.split("_").map((el)=>{return el[0].toUpperCase() + el.slice(1);}).join("-")
    //"Current-Poll-Item"
    //'current-poll-item'.split("-").map(el=>el[0].toUpperCase() + el.slice(1)).join("_")
    //"Current_Poll_Item"
    //,'current-poll-item': Current_Poll_Item
    //,'poll-constructor': Poll_Constructor
    ///>>> constant | always present(ed) part <<<///
    ,'page-footer': Page_Footer
  }
  ,el: function () {
    return '#app';
  }
  //,props: ['User']
  ,data: function () {
    return main_Page_Data;
  }
});

//app.com/mypolls route
var User_Polls_Page = Vue.extend({
  template: [
    '<!-- (child | children) components outlets -->'
    ,'<page-header></page-header>'
    ,'<user-polls-header></user-polls-header>'
    ,'<user-polls-list></user-polls-list>'
    ,'<page-footer></page-footer>'
  ].join("")
  ,components: {
    // <my-component> will only be available in Parent's template
    ///>>> constant | always present(ed) part <<<///
    'page-header': Page_Header
    ///>>> variable | content changed depending on current route part <<<///
    ,'user-polls-header': User_Polls_Header
    ,'user-polls-list': User_Polls_List // <- 'user-polls-header' + filtered 'polls-list'
    //'current_poll_item'.split("_").map((el)=>{return el[0].toUpperCase() + el.slice(1);}).join("-")
    //"Current-Poll-Item"
    //'current-poll-item'.split("-").map(el=>el[0].toUpperCase() + el.slice(1)).join("_")
    //"Current_Poll_Item"
    //,'current-poll-item': Current_Poll_Item
    //,'poll-constructor': Poll_Constructor
    ///>>> constant | always present(ed) part <<<///
    ,'page-footer': Page_Footer
  }
  ///>>> ((mount | entry) point) | root
  /**/
  ,el: function () {
    return '#app';
  }
  /**/
  //,props: ['User']
  ,data: function () {
    return user_Polls_Page_Data;
  }
});
// register
//Vue.component('user-polls_page', User_Polls_Page);

Vue.use(VueCharts);
// define
// a fragment instance (has: v-for)
var Pie_Chart = Vue.extend({
  template: [
    //'<canvas id="pie_Chart" width="400" height="400"></canvas>'
    '<vue-chart'
      //ColumnChart
      ,' v-bind:chart-type="chart_Type"'
      ,' v-bind:columns="columns"'
      ,' :rows="rows"'
      ,' :options="options"'
    ,'></vue-chart>'
  ].join("")
  ///>>> ((mount | entry) point) | root
  /**/
  //,replace: false
  ,el: function () {
    //return '#app';
    return 'app';
  }
  /**/
  /**/
  ,data: function () {
    // filterBy poll_ID from app.com/polls/poll_ID route
    //return polls_Data;
    /*
    return {
      ///> must be explicitly visible for | inside | within component's scope
      color_Names: color_Names
      ,poll_Data: {
        caption: "What is your favorite whatever ?"
        //,selected: {option_Name: "Not sure", votes: 9}
        ,options: poll_1_Vote_Options
      }
    };
    */
    return {
      ///> default:
      //packages: ["corechart"]
      ///> default: "LineChart"
      ///> works
      //chart_Type: "ColumnChart"
      ///> donutchart works
      chart_Type: "PieChart"
      ///> Column 0,	Column 1
      ///> Slice labels,	Slice values
      ///> string,	number
      ,columns: [
        {
          'type': 'string',
          'label': 'Year'
        }
        , {
          'type': 'number',
          'label': 'Sales'
        }
        , {
          'type': 'number',
          'label': 'Expenses'
        }
      ],
      ///> Rows: Each row in the table represents a slice.
      rows: [
          ['2004', 1000, 400],
          ['2005', 1170, 460],
          ['2006', 660, 1120],
          ['2007', 1030, 540]
      ],
      options: {
          title: 'Company Performance',
          pieHole: 0.4,
          is3D: true,
          //legend: 'none',
          //pieSliceText: 'label',
          slices: {
            ///> starting from zero index
            //0: {offset: 0.2},
            ///> it may be:
            ///> lesser piece of two or more
            ///> or bigger piece of all if there are more than two
            1: {offset: 0.3},
            //4: {offset: 0.4},
            //5: {offset: 0.5},
          },
          hAxis: {
              title: 'Year',
              minValue: '2004',
              maxValue: '2007'
          },
          vAxis: {
              title: '',
              minValue: 300,
              maxValue: 1200
          },
          width: 900,
          height: 500,
          curveType: 'function'
      }
  };
  }
  ,created: function () {
    // `this` points to the vm instance
    console.log('Pie_Chart is created: ');// + this.poll_Data.caption);
  }
  ///> created -> compiled -> inserted into DOM | document -> ready
  ///> for deffered callbacks ?
  ,ready: function () {
    // `this` points to the vm instance
    console.log('Pie_Chart is ready: ');// + JSON.stringify(this.poll_Data.options[0]));
    /*
    failed to render in plunker

    var ctx = document.getElementById("pie_Chart").getContext("2d");
    //'CanvasRenderingContext2D.webkitImageSmoothingEnabled' is deprecated.
    //Please use 'CanvasRenderingContext2D.imageSmoothingEnabled' instead.
    // `Chart` name conflict with global | lovaly declared component
    //ReferenceError: Chart is not defined
    var myChart = new Chart(
      ctx,
      {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
      }
    );
    */
  }
  /**/
  ///> view like, geter mostly, setter work is unclear
  //,computed: {
    // a computed getter
    // scope.option_Index is not a function
  //}
  // define methods under the `methods` object
  ,methods: {
  }
});
// register
//Vue.component('pie-chart', Pie_Chart);

// define
// a fragment instance (has: v-for)
var SVG_Chart = Vue.extend({
  template: [
        ///> chart layers goes here: ??? CSS or canvas or SVG ???
        /* CSS drawing is to hard, so screw it
        ,'<div'
          ,' style="border-radius:50%;'
            ,'color:green;'
            ,'background-color:blue;'
            ,'padding:25%;'
            //rect (top, right, bottom, left)
            ,'clip: rect(0px, 50px, 10px, 40px);'
            ,'width: 50%;'
            //,'height: 50%;'
            ,'border-style:solid;'
            ,'border-width:5%;'
          ,'">'
          ,'&nbsp;0'
        ,'</div>'
        */
        ///> what units it uses ? px ?
        //,'<svg width="12cm" height="5.25cm" viewBox="0 0 1200 400"'
        //  ,' xmlns="http://www.w3.org/2000/svg" version="1.1">'
        '<svg height="400" width="400">'
          ,'<title>arc commands in path data</title>'
          ,'<desc>Picture of a pie chart with pie wedges</desc>'
          ,'<circle cx="200" cy="200" r="100" stroke="gray" stroke-width="5" fill="red" />'
          ,'<path'
            ,' d="M100 200'
              /*
              A (absolute) | a (relative)	<- elliptical arc
              (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+
              */
              ,' A 100 100, 0, 1, 1, 200 200'
              ,' L 100 100 Z"'
            ,' fill="blue"/>'
          ,'<path'
            ,' d="M100 200'
              ,' A 100 100, 0, 0, 0, 150 200'
              ,' L 100 100 Z"'
            ,' fill="green"/>'
          ///> with relative parameters
          ,'<path d="M300,200 h-100 a100,100 0 1,0 100,-100 z"'
            ,'fill="yellow" stroke="blue" stroke-width="5" />'
        ,'</svg>'
  ].join("")
  ///>>> ((mount | entry) point) | root
  ,replace: false
  /**/
  ,el: function () {
    return '#app';
  }
  /**/
  /**/
  ,data: function () {
    // filterBy poll_ID from app.com/polls/poll_ID route
    //return polls_Data;
    return {
      ///> must be explicitly visible for | inside | within component's scope
      color_Names: color_Names
      ,poll_Data: {
        caption: "What is your favorite whatever ?"
        //,selected: {option_Name: "Not sure", votes: 9}
        ,options: [
          // Votes Count
          {option_Name: 1, votes: 1}
          , {option_Name: "one", votes: 2}
          , {option_Name: "Me too", votes: 3}
          , {option_Name: "Not sure", votes: 9}
        ]
      }
    };
  }
  /**/
  ///> view like, geter mostly, setter work is unclear
  //,computed: {
    // a computed getter
    // scope.option_Index is not a function
  //}
  // define methods under the `methods` object
  ,methods: {
  }
});
// register
//Vue.component('svg-chart', SVG_Chart);

// define
// a fragment instance (has: v-for)
var Poll_Chart = Vue.extend({
  template: [
    '<section class="w3-container">'
    //'<h2 v-bind="poll_Data.caption"></h2>'
    /*
    '<h2 :prop="{caption:\"prop.caption\",options:{option:\"whatever\",votes: 5}}">'
    ,'{{poll_Data.caption}}<br>'
    ,'{{prop.caption}}{{prop}}'
    ,'</h2>'
    */
    //,'<!-- the submit event will no longer reload the page -->'
    // v-on:submit="onSubmit" expects a function value, got undefined
    /*
    user | unique | ip allowed vote only once per poll
    */
    ,'<form class="w3-container w3-half w3-left" v-on:submit.prevent="">'
      ,'<h2 tytle="poll Caption">{{poll_Data.caption}}</h2>'
      //,'<legend>Personal information:</legend>'
      ,'<label class="w3-label">I\'d like to vote for...:</label>'
      ///> after select changes v-model
      ///> but needed to add | mutate selected option.votes only += 1
      // You are
      // setting a non-existent path "selected"
      // on a vm instance (vm..selected).
      // Consider pre-initializing the property
      // with(in) the "data" option
      // for more reliable reactivity and better performance.
      ,'<select class="w3-input w3-round w3-border" '
        ,'v-model="selected" lazy name="vote_For">'
        ,'<option class="w3-text-deep-purple"'
          //,' value="{option_Name: \"\", votes: null}" disabled selected>'
          //,' value="{option_Name: \"\", votes: undefined}" disabled selected>'
          ///>>>*** WARN !!!
          ///> prefer to use \' inside "" for string literals | var names | expressions
          ,' value="{option_Name: \'\', votes: 0}" disabled selected>'
          ,'Choose your option'
        ,'</option>'
        ,'<option v-for="option in poll_Data.options" v-bind:value="option">'
          ,'{{ option.option_Name }}'
        ,'</option>'
        //I'd like a custom option <- last option
        ,'<option class="w3-text-teal"'
          //,' value="">'
          //,' value="{option_Name: \'add_New_Option\', votes: 33}">'
          //,' value="true">'
          ,' value="add_New_Option">'
          ,'Make | add new option, to vote for'
        ,'</option>'
      ,'</select>'
      ,'<span>Selected: {{ selected | json }}</span>'
      ,'<br>'
      ,'<span>Selected.option_Name: {{ selected.option_Name }}</span>'
      ,'<br>'
      ,'<span>Selected.votes: {{ selected.votes }}</span>'
      ,'<br>'
      ///> Conditional
      //,'<div v-if="selected === true">'
      //scope.typeof is not a function
      //,'<div v-if="typeof(selected) == \'boolean\'">'
      ,'<div v-if="selected == \'add_New_Option\'">'
      ,'<label class="w3-label">Vote with my own option:</label>'
      ,'<input type="text"'
        ,' class="w3-input w3-border w3-round w3-hover-blue"'
        ,' v-model="poll_Data.options | json" placeholder="edit me">'
      ,'</div>'
      ,'<input class="w3-btn w3-round w3-indigo w3-margin-top"'
        ,' type="submit" value="Submit"'
        ,' title="Submit your vote"'
        // 'v-on:click="greet" v-on:keyup.enter="submit"
        ,'v-on:click="" v-on:keyup.enter="">'
      //,'<br>'
      //,'<br>'
    //,'</form>'
    //,'<div class="w3-container w3-half w3-left">'
    ,'<button class="w3-btn-block w3-round w3-blue w3-margin-top"'
      ,'title="Share on Twitter"'
      ,' v-on:click="">'
      ,'<i class="fa fa-twitter"></i>'
      ,' Share on Twitter'
    ,'</button>'
    //,'</div>'
    ,'</form>'
      // w3-right
      ,'<section class="w3-container w3-half " name="chart_Section">'
        ,'Chart'
        ,'<chart></chart>'
        ,'<div v-for="(index, item) in poll_Data.options">'
          ,'<span class=" w3-left">'
          ///> must look like inline element | String, but not
          //,'<span>'
            //,'{{ index }}'
            //,'<span class="w3-badge"'
            // Error when evaluating expression
            //,'<span class="w3-badge {{color_Names[index]}}">'
            ///> work as expected
            //,'<span class="w3-badge {{color_Names[index % color_Names.length]}}">'
            ///>>>*** use \' instead of \" inside {{}} for string literals
            //,'<span class="{{color_Names[index % color_Names.length]}} {{index % 2 == 0 ? \'w3-badge\' : \'w3-tag\'}}">'
              ///> last calculated in loop value case ?
            // Invalid expression. Generated function body:
            //,'<span v-bind:class="{ color_Names[index % color_Names.length]: true }">'
            ///> work as expected
            //,'<span v-bind:class="index % 2 == 0 ? \'w3-badge\' : \'w3-tag\'">'
            ,'<span '
              //,' v-bind:class="{ color_Names[index]: true }">'
              ///> Array Syntax works as expected
              ,' v-bind:class="[index % 2 == 0 ? \'w3-badge\' : \'w3-tag\''
              ,', \'w3-\' + color_Names[index % color_Names.length]]">'
              //,' v-bind:class="color_Names[option_Index(item.option_Name)]">'
              //,' v-bind:class="index">'
              ///> inserted not object value but literal instead
              //,' v-bind:class="{ \'$index\': true }">'
                ///> replace 'option_Index' with new value ?
                //,', i:{{ option_Index = item.option_Name }},'
                ///> work as expected
                //,', i:{{ option_Index(item.option_Name) }},'
              ,'{{ item.votes }}'
            ,'</span>'
            ,' {{ item.option_Name }}&nbsp;'
            // fa fa-square
            ,'<i class="fa fa-square w3-margin-right w3-xlarge"'
              ,' v-bind:class="\'w3-text-\' + [color_Names[index % color_Names.length]]">'
            ,'</i>'
          ,'</span>'
        ,'</div>'
        ///> conditional
        ,'<button class="w3-btn-block w3-round w3-red w3-margin-top"'
          ,' title="Remove this Poll"'
          //,' v-if="user == 2"'
          ,' v-if="user"'
          ,' v-on:click="">'
          ,'<i class="fa fa-minus-square w3-margin-right"></i>'
          ,'Remove this Poll'
        ,'</button>'
      ,'</section>'
    ,'</section>'
  ].join("")
  ///> use props when inserting | binding data to it as fragment
  ///> in parent template: <child props_Data></child>
  ///> with 'props_Data' from parent 'data'
  ///> like placeholder for future insert | substitution
  /*
  ,props: {
    //selected: {option_Name: "Not sure", votes: 9}
    poll_Data: {
      type: Object
      ,required: true
      // Object/Array as default prop values
      // will be shared across multiple instances.
      // Use a factory function
      // to return the default value instead.
      ,default: {
        caption: "What is your favorite whatever ?"
        //,selected: {option_Name: "Not sure", votes: 9}
        ,options: [
          // Votes Count
          {option_Name: 1, votes: 1}
          , {option_Name: "one", votes: 2}
          , {option_Name: "Me too", votes: 3}
          , {option_Name: "Not sure", votes: 9}
        ]
      }
    },
  }
  */
  ,components: {
    'svg-chart': SVG_Chart
  }
  ///>>> ((mount | entry) point) | root
  /**/
  ,el: function () {
    return '#app';
    // You are mounting an instance
    // with a template to <body>.
    // This will replace <body> entirely.
    // You should probably use `replace: false` here.
    //return 'body';
  }
  /**/
  /**/
  ,data: function () {
    // filterBy poll_ID from app.com/polls/poll_ID route
    //return polls_Data;
    return {
      selected: {option_Name: "Not sure", votes: 9}
      ///> must be explicitly visible for | inside | within component's scope
      ,color_Names: color_Names
      , user: user_Polls_Page_Data.User
      ,poll_Data: {
        caption: "What is your favorite whatever ?"
        //,selected: {option_Name: "Not sure", votes: 9}
        ,options: [
          // Votes Count
          {option_Name: 1, votes: 1}
          , {option_Name: "one", votes: 2}
          , {option_Name: "Me too", votes: 3}
          , {option_Name: "Not sure", votes: 9}
        ]
      }
    };
  }
  /**/
  ///> view like, geter mostly, setter work is unclear
  //,computed: {
    // a computed getter
    // scope.option_Index is not a function
  //}
  // define methods under the `methods` object
  ,methods: {
    ///> work as expected
    option_Index: function (opt_Name) {
      /*
      ///> :Boolean
      function isPrime(element, index, array) {
        var start = 2;
        while (start <= Math.sqrt(element)) {
          if (element % start++ < 1) {
            return false;
          }
        }
        return element > 1;
      }
      */
      var search_Result = this
        .poll_Data
        .options
        .findIndex((elem) => elem.option_Name == opt_Name);
      if (is_Debug_Mode) {console.log("opt_Name:", opt_Name);}
      if (search_Result == -1) {
        ///> default
        return 0;
      } else {
        // `this` points to the vm instance
        return search_Result;
      }
    }
  }
});
// register
//Vue.component('poll-chart', Poll_Chart);

// app.com/polls/poll_ID route
var Current_Poll_Item = Vue.extend({
  template: [
    '<!-- (child | children) components outlets -->'
    ,'<page-header></page-header>'
    ,'<user-polls-header></user-polls-header>'
    ,'<user-polls-list></user-polls-list>'
    ,'<page-footer></page-footer>'
  ].join("")
  ,components: {
    'page-header': Page_Header
    ,'user-polls-header': User_Polls_Header
    ,'user-polls-list': User_Polls_List
    ,'page-footer': Page_Footer
  }
  ///>>> ((mount | entry) point) | root
  /**/
  ,el: function () {
    return '#app';
  }
  /**/
});

//,'poll-constructor': Poll_Constructor
// app.com/newpoll route
// define
// a fragment instance (has: v-for)
var Poll_Constructor = Vue.extend({
  template: [
    '<section class="w3-container">'
      //,'<h1>Create a new poll.</h1>'
      ,'<form class="w3-container w3-half w3-left" v-on:submit.prevent="">'
        /**/
        //,'<legend>'
        ,'<h2 tytle="poll Caption">Create a new poll.</h2>'
        //,'</legend>'
        /**/
        ,'<label class="w3-label" tytle="poll Caption">Title:</label>'
        ,'<input class="w3-input w3-border w3-round w3-hover-blue" type="text"'
          ,' v-model="poll_Data.options | json"'
          ,' title="add new vote caption"'
          ,' placeholder="add new vote caption" required>'
        ,'<label class="w3-label" tytle="poll\'s Options">'
          ,'Options list (seperated by new line | \\n | Enter):</label>'
        ,'<textarea name="poll_Options" rows="3" cols="30"'
          ,' class="w3-input w3-round w3-hover-blue"'
        //,'<input class="w3-input w3-round w3-hover-blue" type="text"'
          ,' v-model="poll_Data.options | json"'
          ,' title="add new vote option"'
          ,' placeholder="add new vote option" required>'
        ,'</textarea>'
        //fa fa-plus-square
        ,'<i class="fa fa-plus-square"></i>'
        ,'<input class="w3-btn w3-round w3-indigo" type="submit" value="Add"'
          ,' title="Submit your vote"'
          // 'v-on:click="greet" v-on:keyup.enter="submit"
          ,'v-on:click="" v-on:keyup.enter="">'
    ,'</section>'
  ].join("")
  /*
  ,props: {
  }
  */
  ///>>> ((mount | entry) point) | root
  /**/
  ,el: function () {
    return '#app';
  }
  /**/
  /**/
  ,data: function () {
    // filterBy poll_ID from app.com/polls/poll_ID route
    //return polls_Data;
    return {
      selected: {option_Name: "Not sure", votes: 9}
      ///> must be explicitly visible for | inside | within component's scope
      ,poll_Data: {
        //,selected: {option_Name: "Not sure", votes: 9}
        options: [
          // Votes Count
          {option_Name: 1, votes: 1}
          , {option_Name: "one", votes: 2}
          , {option_Name: "Me too", votes: 3}
          , {option_Name: "Not sure", votes: 9}
        ]
      }
    };
  }
  /**/
  ///> view like, geter mostly, setter work is unclear
  //,computed: {
    // a computed getter
    // scope.option_Index is not a function
  //}
  // define methods under the `methods` object
  ,methods: {
  }
});
// register
//Vue.component('poll-chart', Poll_Chart);

// app.com/newpoll route
var New_Poll_Item = Vue.extend({
  template: [
    '<!-- (child | children) components outlets -->'
    ,'<page-header></page-header>'
    //'poll-constructor': Poll_Constructor
    ///> mount point for fragment was ignored
    ,'<poll-constructor></poll-constructor>'
    ,'<page-footer></page-footer>'
  ].join("")
  ,components: {
    'page-header': Page_Header
    ,'poll-constructor': Poll_Constructor
    ,'page-footer': Page_Footer
  }
  ///>>> ((mount | entry) point) | root
  /**/
  ,el: function () {
    return '#app';
  }
  /**/
});


/*
 The Vue constructor can be extended
 to create reusable component constructors
 with pre-defined options:
*/
// define
var MyComponent = Vue.extend({
  // extension options
  // The 'el' & 'data' options require
  // a function value
  // when used in (with) Vue.extend()
//})

//new Vue({
  /*el: '#app',
  data: {
    message: 'Hello Vue.js!'
    ,todos: [
      { text: 'Add some todos' }
      ,{ text: 'Learn JavaScript' },
      { text: 'Learn Vue.js' },
      { text: 'Build Something Awesome' }
    ]
  }*/
  el: function () {
    return '#app';
  }
  ,data: function () {
    return data;
  }
  ,methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
    ,addTodo: function () {
      var text = this.newTodo.trim();

      if (text) {
        this.todos.push({ text: text });
        this.newTodo = '';
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1);
    }
  }
});

// Globally register the component with tag: my-component
//Vue.component('my-component', MyComponent)

// create a root instance
/*new Vue({
  el: '#example'
});*/


// all instances of `MyComponent` are created with
// the pre-defined extension options
//var myComponentInstance = new MyComponent();


//var page_Header_Component_Instance = new Page_Header();
//var polls_List_Component_Instance = new Polls_List();

//var home_Page_Component_Instance = new Home_Page();

//var user_Polls_Page_Instance = new User_Polls_Page();
//var current_Poll_Item_Instance = new Current_Poll_Item();

//var svg_chart_Instance = new SVG_Chart();
var pie_Chart_Instance = new Pie_Chart();
//var poll_Chart_Instance = new Poll_Chart();
//var current_Poll_Item_Instance = new Current_Poll_Item();

//var poll_Constructor_Instance = new Poll_Constructor();
//var New_Poll_Item_Instance = new New_Poll_Item();


/*
failed to render in plunker
// And for a doughnut chart
var ctx = document.getElementById("doughnut_Chart").getContext("2d");
console.log("ctx:", ctx);
var doughnut_Chart_Data = {
    labels: [
        "Red",
        "Green",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};
var doughnut_Chart_Options = {
  //type:Number, default:50 - for doughnut, 0 - for pie
  //, description:The percentage of the chart that is cut out of the middle.
  cutoutPercentage: 25
  //type:Number, default:-0.5 * Math.PI
  //, description:Starting angle to draw arcs from
  //,rotation
  //type:Number, default:2 * Math.PI
  //, description:Sweep to allow arcs to cover
  //,circumference
  //type:Boolean, default:true
  //, description:If true, will animate the rotation of the chart.
  //,animation.animateRotate
  //type:Boolean, default:false
  //, description:If true, will animate scaling the Doughnut from the centre.
  //,animation.animateScale
  //type:Function, default:function(data) {}
  //, description:Returns labels for each the legend
  //,legend.labels.generateLabels
  //type:Function, default:function(event, legendItem) {}
  //, description:Handles clicking an individual legend item
  //,legend.onClick
};
var doughnut_Chart = new Chart(ctx, {
    type: 'doughnut'
    ,data: doughnut_Chart_Data
    ,options: doughnut_Chart_Options
});
*/
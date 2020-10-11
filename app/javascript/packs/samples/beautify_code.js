export const BEAUTIFY_CODE_SAMPLE = {
    php: `<?php
$servername="localhost";
$username="username";
$password="password";
$dbname="myDB";

function test(){echo "This is a test function.";}

// Create connection
$conn=new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error){die("Connection failed: ".$conn->connect_error);} 

$sql = "SELECT id, firstname, lastname FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
 // output data of each row
while($row = $result->fetch_assoc()) {echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";}} else {echo "0 results";}
$conn->close();
?>`,



    c: `#include <stdio.h>
int main()
{
   char name[50];int marks, i, num;

   printf("Enter number of students: ");scanf("%d", &num);

   FILE *fptr;
   fptr = (fopen("C:\\\\student.txt", "w"));
   if(fptr == NULL){printf("Error!");exit(1);}

   for(i=0;i<num;++i){
   printf("For student%d\\nEnter name: ", i+1);scanf("%s", name);printf("Enter marks: ");
   scanf("%d", &marks);fprintf(fptr,"\\nName: %s \\nMarks=%d \\n", name, marks);}

   fclose(fptr);return 0;
}`,



    cpp: `#include <iostream>
using namespace std;

struct student{
    char name[50];int roll;float marks;
} s[10];

int main()
{
    cout << "Enter information of students: " << endl;

    // storing information
    for(int i = 0; i < 10; ++i){
        s[i].roll = i+1;cout << "For roll number" << s[i].roll << "," << endl;

        cout << "Enter name: ";cin >> s[i].name;

        cout << "Enter marks: ";cin >> s[i].marks;

        cout << endl;
    }

    cout << "Displaying Information: " << endl;

    // Displaying information
    for(int i=0;i<10;++i){
        cout << "\\nRoll number: " << i+1 << endl;cout << "Name: " << s[i].name << endl;cout << "Marks: " << s[i].marks << endl;
    }

    return 0;
}
`,



    objectC: `#import "MakeRPCViewController.h"
#import "SelectUserViewController.h"
@implementation SelectUserViewController
- (void)viewDidLoad {[super viewDidLoad];self.signOutButton.layer.cornerRadius = 5;self.signOutButton.hidden = YES;
  // As instructed in https://developers.google.com/identity/sign-in/ios/sign-in
  GIDSignIn *signIn = GIDSignIn.sharedInstance;
  signIn.delegate = self;signIn.uiDelegate = self;
  // As instructed in
  // https://developers.google.com/identity/sign-in/ios/additional-scopes
  if (![signIn.scopes containsObject:kTestScope]) {signIn.scopes = [signIn.scopes arrayByAddingObject:kTestScope];}
  [signIn signInSilently];
}
- (void)signIn:(GIDSignIn *)signIn
    didSignInForUser:(GIDGoogleUser *)user
           withError:(NSError *)error {
  if (error){
    // The user probably cancelled the sign-in flow.
  return;}
  self.mainLabel.text =
      [NSString stringWithFormat:@"User: %@", user.profile.email];
  NSString *scopes = [user.accessibleScopes componentsJoinedByString:@", "];
  scopes = scopes.length ? scopes : @"(none)";
  self.subLabel.text = [NSString stringWithFormat:@"Scopes: %@", scopes];self.signInButton.hidden = YES;self.signOutButton.hidden = NO;
}
- (IBAction)didTapSignOut
{
  [GIDSignIn.sharedInstance signOut];
  self.mainLabel.text = @"Please sign in.";self.subLabel.text = @"";self.signInButton.hidden = NO;self.signOutButton.hidden = YES;
}
@end`,



    csharp: `using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
namespace ConsoleApplication
{
class Program
{
static void Main(string[] args){
int[] arr = new int[5] { 83, 12, 3 };int i;
Console.WriteLine("The Array is :");
for (i = 0; i < 5; i++){Console.WriteLine(arr[i]);}
insertsort(arr, 5);Console.WriteLine("The Sorted Array is :");
for (i = 0; i < 5; i++)Console.WriteLine(arr[i]); 
Console.ReadLine();
}

static void insertsort(int[] data, int n){
int i, j;
for (i=1;i<n;i++){
int item = data[i];int ins = 0;
for (j = i - 1; j >= 0 && ins != 1; ){
if (item < data[j]){data[j + 1] = data[j];j--;data[j + 1] = item;}else ins = 1;
}}
}
}
}
`,



    coldfusion: `component {
// Application properties
this.name = hash( getCurrentTemplatePath() );this.sessionManagement = true;this.sessionTimeout    = createTimespan( 0, 0, 30, 0 );this.setClientCookies  = true;

// Java Integration
this.javaSettings = {loadPaths               : [ ".\\lib" ],loadColdFusionClassPath : true,reloadOnChange          : false};

// COLDBOX STATIC PROPERTY, DO NOT CHANGE UNLESS THIS IS NOT THE ROOT OF YOUR COLDBOX APP
COLDBOX_APP_ROOT_PATH = getDirectoryFromPath( getCurrentTemplatePath() );
// The web server mapping to this application. Used for remote purposes or static purposes
COLDBOX_APP_MAPPING   = "";
// COLDBOX PROPERTIES
COLDBOX_CONFIG_FILE   = "";
// COLDBOX APPLICATION KEY OVERRIDE
COLDBOX_APP_KEY       = "";

// application start
public boolean function onApplicationStart() {
application.cbBootstrap = new coldbox.system.Bootstrap(COLDBOX_CONFIG_FILE,COLDBOX_APP_ROOT_PATH,COLDBOX_APP_KEY,COLDBOX_APP_MAPPING);
application.cbBootstrap.loadColdbox();return true;
}

// application end
public void function onApplicationEnd( struct appScope ) {arguments.appScope.cbBootstrap.onApplicationEnd( arguments.appScope );}

// request start
public boolean function onRequestStart( string targetPage ){
// Process ColdBox Request
application.cbBootstrap.onRequestStart( arguments.targetPage );return true;
}

public void function onSessionStart() {application.cbBootStrap.onSessionStart();}

public void function onSessionEnd( struct sessionScope, struct appScope ) {arguments.appScope.cbBootStrap.onSessionEnd( argumentCollection = arguments );}

public boolean function onMissingTemplate( template ) {return application.cbBootstrap.onMissingTemplate( argumentCollection = arguments );}
}
`,



    go: `package funding

import ("sync"
"testing")

const WORKERS = 10

func BenchmarkWithdrawals(b *testing.B) {
    // Skip N = 1
    if b.N < WORKERS {return}

    // Add as many dollars as we have iterations this run
    fund := NewFund(b.N)

    // Casually assume b.N divides cleanly
    dollarsPerFounder := b.N / WORKERS

    // WaitGroup structs don't need to be initialized
    // (their "zero value" is ready to use).
    // So, we just declare one and then use it.
    var wg sync.WaitGroup

    for i:=0;i<WORKERS;i++ {
    // Let the waitgroup know we're adding a goroutine
    wg.Add(1)
    
    // Spawn off a founder worker, as a closure
    go func() {
        // Mark this worker done when the function finishes
    defer wg.Done()

    for i:=0;i<dollarsPerFounder;i++{fund.Withdraw(1)}
        
    }() // Remember to call the closure!
    }

    // Wait for all the workers to finish
    wg.Wait()

    if fund.Balance() != 0 {b.Error("Balance wasn't zero:", fund.Balance())}
}
`,



    graphql: `query HeroForEpisode($ep: Episode!) {
hero(episode: $ep) {name
... on Droid {primaryFunction}
... on Human {height}}
}
`,
    html: `<html style="color: green">
  <!-- this is a comment -->
<head><title>Mixed HTML Example</title>
<style>
  h1 {font-family: comic sans; color: #f0f;}
  div {background: yellow !important;}
  body {max-width: 50em;margin: 1em 2em 1em 5em;}
</style>
</head>
<body><h1>Mixed HTML Example</h1><script>function jsFunc(arg1, arg2) {if (arg1 && arg2) document.body.innerHTML = "achoo";}</script></body></html>
`,



    jsx: `import React from 'react';

class App extends React.Component {
   render() {
   return (<div><h1>Header</h1><h2>Content</h2><p data-myattribute = "somevalue">This is the content!!!</p></div>);
   }
}
export default App;`,



    java: `package Edureka1;
    
public class HeapSort
{
public void sort(int arr[])
{
int n = arr.length;
// Build heap (rearrange array)
for (int i = n / 2 - 1; i >= 0; i--)
heapify(arr, n, i);
// One by one extract an element from heap
for (int i=n-1; i>=0; i--)
{
// Move current root to end
int temp = arr[0];
arr[0] = arr[i];
arr[i] = temp;
// call max heapify on the reduced heap
heapify(arr, i, 0);
}
}
public void heapify(int arr[], int n, int i)
{
int largest = i; // Initialize largest as root
int l = 2*i + 1; // left = 2*i + 1
int r = 2*i + 2; // right = 2*i + 2
// If left child is larger than root
if (l< n && arr[l] >arr[largest])
largest = l;
// If right child is larger than largest so far
if (r < n && arr[r] > arr[largest])
largest = r;
 
// If largest is not root
if (largest != i)
{
int swap = arr[i];
arr[i] = arr[largest];
arr[largest] = swap;
// Recursively heapify the affected sub-tree
heapify(arr, n, largest);
}
}
/* A utility function to print array of size n */
public static void printArray(int arr[])
{
int n = arr.length;
for (int i=0; i<n; ++i)
System.out.print(arr[i]+" ");
System.out.println();
}
// Driver program
public static void main(String args[])
{
int arr[] = {12, 11, 13, 5, 6, 7};
int n = arr.length;
HeapSort ob = new HeapSort();
ob.sort(arr);
System.out.println("Sorted array is");
printArray(arr);
}
}
`,



    javascript: `
// Demo code (the actual new parser character stream implementation)

function StringStream(string) {this.pos = 0;this.string = string;}

StringStream.prototype = {
done: function() {return this.pos >= this.string.length;},peek: function() {return this.string.charAt(this.pos);},
next: function() {if (this.pos < this.string.length)return this.string.charAt(this.pos++);},
eat: function(match) {var ch = this.string.charAt(this.pos);if (typeof match == "string") var ok = ch == match;else var ok = ch && match.test ? match.test(ch) : match(ch);if (ok) {this.pos++; return ch;}},
eatWhile: function(match) {var start = this.pos;while (this.eat(match));if (this.pos > start) return this.string.slice(start, this.pos);},
backUp: function(n) {this.pos -= n;},
column: function() {return this.pos;},
eatSpace: function() {var start = this.pos;while (/\\s/.test(this.string.charAt(this.pos))) this.pos++;return this.pos - start;},
match: function(pattern, consume, caseInsensitive) {if (typeof pattern == "string") {function cased(str) {return caseInsensitive ? str.toLowerCase() : str;}if (cased(this.string).indexOf(cased(pattern), this.pos) == this.pos) {if (consume !== false) this.pos += str.length;return true;}}
else {var match = this.string.slice(this.pos).match(pattern);if (match && consume !== false) this.pos += match[0].length;return match;}}
};`,

    typescript: `
// Just an interface for renderables
interface IRenderable {
Step(): void;
Draw(ctx: CanvasRenderingContext2D): void;
}

// A 2D vector
class Vector2D {
constructor(public x: number, public y: number){}
}

// A rectangle
class Rect {
constructor(public x: number, public y: number, public w: number, public h: number){}
}

// The renderable subject
class MySubject implements IRenderable {
r: Rect;      // position and size
v: Vector2D;  // velocity
b: Rect;      // bounding box

// constructor sets properties
constructor(r, b) {
this.r = r;
this.v = new Vector2D(3, 2);
this.b = b;
}

// Step the position and bounce off the edges
Step(): void {
this.r.x += this.v.x;
if(this.r.x >= this.b.w - this.r.w) {
this.r.x = this.b.w - this.r.w;
this.v.x *= -1;
} else if (this.r.x <= 0) {
this.r.x = 0;
this.v.x *= -1;
}

this.r.y += this.v.y;
if(this.r.y >= this.b.h - this.r.h) {
this.r.y = this.b.h - this.r.h;
this.v.y *= -1;
} else if (this.r.y <= 0) {
this.r.y = 0;
this.v.y *= -1;
}
}

// Draw the box
Draw(ctx: CanvasRenderingContext2D): void {
ctx.fillStyle = '#cecece';
ctx.fillRect(this.r.x, this.r.y, this.r.w, this.r.h);
}
}

// Singleton pattern
class RenderSystem {
// Singleton instance reference
static private _instance;

// Some private properties
private context;
private canvas;
private looping;
private renderables: Array<IRenderable> = [];

// A singleton should have a private constructor
private constructor() {
this.canvas   = document.getElementById('c');
this.context  = this.canvas.getContext('2d');
}

// A singleton should have static access to the static single 
// instance reference, and create one when needed
static GetInstance(): RenderSystem {
if(!this._instance) {
this._instance = new RenderSystem();
}

return this._instance;
}

// Add a renderable to the list
AddRenderable(r: IRenderable): void {
this.renderables.push(r);
}

// Step all renderables
Step(): void {
for(var i in this.renderables) {
this.renderables[i].Step();
}
}

// Draw all renderables after clearing the screen
Draw(): void {
this.context.fillStyle = 'rgba(0, 0, 0, 0.05';
this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
for(var i in this.renderables) {
this.renderables[i].Draw(this.context);
}
}

// The render loop
Loop(): void {
if(this.looping) {
return;
}

this.looping = true;

var that = this;
+(function step() {
requestAnimationFrame(step);

that.Step();
that.Draw();

})();
}
}


window.addEventListener('load', function() {
var canvas  = document.getElementById('c'),
context = canvas.getContext('2d'),
box     = new Rect(0, 0, 0, 0),
r       = new Rect(50, 50, 20, 20),
rs      = RenderSystem.GetInstance(),
resize  = function() {
canvas.width = innerWidth;
canvas.height = innerHeight;

box.w = innerWidth;
box.h = innerHeight;

context.fillStyle = '#ffffff';
context.fillRect(0, 0, innerWidth, innerHeight);
};


var renderableSubject: MySubject = new MySubject(r, box);

rs.AddRenderable(renderableSubject);

rs.Loop();

window.addEventListener('resize', resize); resize();
})
`,

    less: `.container {h1 {font-size: 25px;color:#E45456;}
p {font-size: 25px;color:#3C7949;}
.myclass {h1 {font-size: 25px;color:#E45456;}p {font-size: 25px;color:#3C7949;}}}
`,

    css: `html{height:100%;padding-left:7%;padding-right:7%}body{background:#f5f5f5;font-size:18px;margin:7% auto}body h1{font-family:'Segoe UI';padding:1px;text-transform:uppercase}body>header>h1{font-size:200%;margin:2%;text-shadow:rgba(0,0,0,.4) 3px 3px 12px;text-align:center}#tagline{text-shadow:rgba(0,0,0,.4) 3px 3px 12px;text-align:center;margin-top:-2%;display:block}body>header>nav{border-bottom:solid 1px rgba(0,0,0,.2);margin-bottom:2%;padding:2%}nav>ul>li{text-shadow:rgba(0,0,0,.4) 1px 1px 1px;text-transform:lowercase;font-size:150%;display:inline;margin-right:5%}body>header>nav>ul>li:last-child{margin-right:0}body>header>nav>ul>li>a{color:orange;text-decoration:none}body>section>article>h1{font-size:125%;margin-bottom:1px;text-shadow:rgba(0,0,0,.4) 1px 1px 1px}body>section>article>p{font-family:'Segoe UI Light';font-size:100%;margin-top:2%;margin-bottom:2%;text-align:justify}body>section>article>h1+p{font-style:italic;font-size:110%}.callout{font-weight:700}a{padding-bottom:2px;text-decoration:none}a:hover{opacity:.8}a:active,a:focus{position:relative;top:1px}
`,

    scss: `.links{&,& li,& ul{margin:0;padding:0;list-style:none}}nav ul{@extend .links;background:#ccc;box-shadow:0 -2px 4px rgba(0,0,0,.1) inset;text-align:center;cursor:default;li,a{display:inline-block}a{color:#333;text-decoration:none;padding:3px;&:hover{background:#ddd;background:rgba(255,255,255,.4)}}}body{margin:0;font:12px Ubuntu,Arial,sans-serif}
`,
    python: `import random

board = []

for x in range(0,5):
  board.append(["O"] * 5)
def print_board(board):
  for row in board:
    print " ".join(row)
print "Let's play Battleship!"
print_board(board)
def random_row(board):
  return random.randint(0,len(board)-1)
def random_col(board):
  return random.randint(0,len(board[0])-1)
ship_row = random_row(board)
ship_col = random_col(board)
print ship_row
print ship_col
for turn in range(4):
\tguess_row = input("Guess Row:")
\tguess_col = input("Guess Col:")
\t
\tif guess_row == ship_row and guess_col == ship_col:
\t  print "Congratulations! You sunk my battleship!"
\t  break
\telse:
\t\tif turn == 3:
\t\t\tboard[guess_row][guess_col] = "X"
\t\t\tprint_board(board)
\t\t\tprint "Game Over"
\t\t\tprint "My ship was here: [" + str(ship_row) + "][" + str(ship_col) + "]"
\t\telse:\t\t\t
\t\t\tif (guess_row < 0 or guess_row > 4) or (guess_col < 0 or guess_col > 4):
\t\t\t\tprint "Oops, that's not even in the ocean."
\t\t\telif(board[guess_row][guess_col] == "X"):
\t\t\t\tprint "You guessed that one already."
\t\t\telse:
\t\t\t\tprint "You missed my battleship!"
\t\t\t\tboard[guess_row][guess_col] = "X"
\t\t\tprint (turn + 1)
\t\t\tprint_board(board)
`,
    ejs: `
<!DOCTYPE html> 
<html> 
<head> 
<title>Home Page</title> 
<style type="text/css" media="screen"> 
body { background-color: skyblue; text-decoration-color: white; font-size:5em;  } 
</style> 
</head> 
<body> 
Hobbies of <%=data.name%> are:<br/> 
<ul> <% data.hobbies.forEach((item)=>{%> <li><%=item%></li>  <%});%> </ul> 
</body> 
</html>`,

    htmlerb: `<!doctype html>
<html>
<head>
<meta charset="utf-8"/>
</head>
<body>
<h1>Blogg</h1>
<p>
Time: <%= Time.now %>
</p>
<% Post.all.each do |post| %>
<article><h2><%= post.title %></h2><div><%= post.body %></div></article><% end %>
</body>
</html>
`,

    xml: `<?xml version="1.0" encoding="UTF-8"?>
<emails><email><to>Vimal</to><from>Sonoo</from><heading>Hello</heading><body>Hello brother, how are you!</body></email><email><to>Peter</to><from>Jack</from><heading>Birth day wish</heading><body>Happy birth day Tom!</body></email><email><to>James</to><from>Jaclin</from><heading>Morning walk</heading><body>Please start morning walk to stay fit!</body></email><email><to>Kartik</to><from>Kumar</from><heading>Health Tips</heading><body>Smoking is injurious to health!</body></email></emails>   
`,
    svg: `
<svg width="600" height="600">
<g transform="translate(100,100)"> 
<text id="TextElement" x="0" y="0" style="font-family:Verdana;font-size:24; visibility:hidden"> It's SVG!
<set attributeName="visibility" attributeType="CSS" to="visible" begin="1s" dur="5s" fill="freeze" />
<animateMotion path="M 0 0 L 100 100" begin="1s" dur="5s" fill="freeze" />
<animateTransform attributeName="transform" attributeType="XML" type="rotate" from="-30" to="0" begin="1s" dur="5s" fill="freeze" /> 
<animateTransform attributeName="transform" attributeType="XML" type="scale" from="1" to="3" additive="sum" begin="1s" dur="5s" fill="freeze" /> 
</text> 
</g> 
Sorry, your browser does not support inline SVG.
</svg>
`,

    ruby: `require("last")

class Tree
class Node
include Follower

def initialize(d)
@val = d
@lft, @rgt = nil
end
attr_reader :lft, :rgt, :val
attr_writer :lft, :rgt

def next
return @rgt
end

def insert(new)
if new.val < @val then
if @lft == nil then
@lft = new
else
@lft.insert(new)
end
else
if @rgt == nil then
@rgt = new
else
@rgt.insert(new)
end
end
end

def each(block)
if @lft then @lft.each(block) end
block.call(@val)
if @rgt then @rgt.each(block) end
end
end

def initialize(first)
@root = Node.new(first)
end

def insert(v)
@root.insert(Node.new(v))
end

def max
return @root.last.val
end

def each(&blk)
@root.each(blk)
end
end
`,
    sql: `select country.country_name_eng, sum(case when call.id is not null then 1 else 0 end) as calls, avg(isnull(datediff(second, call.start_time, call.end_time),0)) as avg_difference
from country left join city on city.country_id = country.id
left join customer on city.id = customer.city_id left join call on call.customer_id = customer.id
group by country.id, country.country_name_eng
having avg(isnull(datediff(second, call.start_time, call.end_time),0)) > (select avg(datediff(second, call.start_time, call.end_time)) from call)
order by calls desc, country.id asc;
`,
    json: `{"colors":[{"color":"black","category":"hue","type":"primary","code":{"rgba":[255,255,255,1],"hex":"#000"}},{"color":"white","category":"value","code":{"rgba":[0,0,0,1],"hex":"#FFF"}}]}`

}
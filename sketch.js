/**

  Duplicate this sketch to start your project 🧪
  More info: https://dev.codemotionkids.com/libraries/diorama/docs/
  
  Creative Commons BY-SA

**/

function preload() {
  treeModel = loadAsset("albero.glb");
}

function setup() 
{
  createCanvas3D(640, 480);
  //Change background color of the scene
  background3D("#FFFFFF");
  //Change material color to orange
  environment(FOREST);
  
  var albero = beginGroup();
  diffuse("#0C5C23");
  //Create a sphere in 0, 0, 0 with radius 1
  roughness(1);
  cone(0,6,0, 1, 6);
  diffuse("rgb(178,98,40)");
  align(TOP);
  cylinder(0, 0, 0, 0.35, 3);
  
  endGroup();

  
    var lato = 200;
    var numeroAlberi = 100;
    for (var i=0; i<numeroAlberi; i++)
    {  
     var x = random(-lato/2, lato/2);
     var y = random(-0, 0);
     var z = random(-lato/2, lato/2);

    var nuovoAlbero = clone(albero, x, y, z);
    nuovoAlbero.setScale(random(1, 2));
      
    }
  //Terreno 
  align(BOTTOM)
  diffuse("#b08968")
  box(0,0,0, lato,1, lato)
  
  pushFX(BLOOM, 0.2)


} 


function draw() {
  // 🔍 Never create objects here, but don't forget to have it in your code:
  // leave empty for the moment
}

//	editor-meta.js

	const editorDB = new zango.Db( "meta", {

		geometries: true,
		materials:  true,
		textures:   true,
		images:     true,
		shapes:     true,
		objects:    true,

	});

	editorDB.open(function(err, database){
		if (err) console.error(err);
	}).then( function(){

		debugMode && console.log( 
			"Database " + editorDB.name 
			+ " (v" + editorDB.version 
			+ ") ready for use."
		);

	}).catch(function(err){
		console.error(err);
	});

	debugMode && console.log("editor DB loaded!");

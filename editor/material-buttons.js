//	material-needs-update.js

	(function( needs_update ){

		watch( needs_update, "onclick", function( prop, event, value ){

			var material = getMaterialByEntityId();
			if ( material ) material.needsUpdate = true;

		});

	})( TabUI.Material.tab.querySelector("div#material-needs-update") );


//	exit-edit-mode.js

	(function(exit_button,entity_droplist,exitEditMode){

		watch( exit_button, "onclick", function( prop, event, value ){

			 exitEditMode( entity_droplist );
		});

	})( 
		TabUI.Material.tab.querySelector("div#material-exit-mode"), // exit_button,
		TabUI.Material.tab.querySelector("select#material-entities-droplist"), // entity_droplist.
		exitEditMode // function.
	 ); 

//	create-material.js

	(function(create_button,type_droplist,entity_droplist,entities){

		watch( create_button, "onclick", function( prop, event, type ){

		//	Get type.
			if ( type === "" || type === undefined ) return;

		//	Init properties based on type.

			switch (type) {
				//	case "PointsMaterial":
				//	case "SpriteMaterial":
				//	case "ShaderMaterial":
				//	case "ShadowMaterial":
				//	case "MeshToonMaterial":
				//	case "MeshBasicMaterial":
				//	case "MeshPhongMaterial":
				//	case "MeshDepthMaterial":
				//	case "MeshNormalMaterial":
				//	case "MeshLambertMaterial":
				//	case "MeshStandardMaterial":
				//	case "MeshPhysicalMaterial":
				//	case "RawShaderMaterial":
				//	case "LineBasicMaterial":
				//	case "LineDashedMaterial":
				//	break;
			}

		//	Create.
			var material = new THREE[ type ]();
			if ( material === undefined ) return;

		//	Naming.
			material.name = "new material";

		//	Add entity.
			entities.add( material );

		//	Enter edit mode.
			callWatchers( entity_droplist, "onchange", "change", entity_droplist.value = String(material.id) );

		});

	})( 
		TabUI.Material.tab.querySelector("div#create-material-button"), // create_button,
		TabUI.Material.tab.querySelector("select#material-type-droplist"), // type_droplist,
		TabUI.Material.tab.querySelector("select#material-entities-droplist"), // entity_droplist,
		material_entities // entities,
	 ); 

//	replace-material.js

	(function( replace_button ){

		watch( replace_button, "onclick", function( prop, event, value ){

			var object = getObjectByEntityId(); 
			var material = getMaterialByEntityId();
			if ( !(object && material && object.material) ) return;

			object.material = material;
		});

	})( TabUI.Material.tab.querySelector("div#replace-material-button") ); // replace_button
	  

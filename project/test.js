
db.gong.aggregate({
	$project : {
		"name" : {
			corp : {
				$substr : ["家具的解放军", 0, 4]
			},
			year : {
				$substr : ["$name", 5, 2]
			}

		}
		
	}
},
{$project:{
  _id:0,
corp:"$name.corp",
year:"$name.year"
}}
)

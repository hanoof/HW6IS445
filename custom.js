var candidates = [
  { name: 'Peter Parker', likes: '700'},
  { name: 'Tony Stark', likes: '135'},
  { name: 'dash', likes: '0'},
]

populateCandidates();
function populateCandidates(){
	var toAppend = "";
	for (var i = 0 ; i < candidates.length ; i++){
		toAppend = toAppend + '<div class = "col-md-3">'+candidates[i].name+'</div>';
        toAppend = toAppend + '<div class = "col-md-3">'+candidates[i].likes+'</div>';
        toAppend = toAppend + '<div class = "col-md-3">'+'<div class="btn btn-info" onclick="increaseLike('+i+')">Like</div>'+'</div>';
        toAppend = toAppend + '<div class = "col-md-3">'+'<div class="btn btn-danger" onclick="deleteCandidate('+i+')">Delete</div>'+'</div>';

	}
	$( "#candidateList" ).empty();
	$( "#candidateList" ).append(toAppend);
}

function increaseLike(index){
	candidates[index].likes = ( parseInt(candidates[index].likes) + 1 ).toString();
	populateCandidates();
}

function deleteCandidate(index){
	candidates.splice(index,1);
	populateCandidates();
}

function createNewCandidate(){
	var name = $('#newCandidate').val();
	if(name && name != '' ){
			var newCandidate = {
			name:name,
			likes:'0'
		}
		candidates.push(newCandidate);
		populateCandidates();	
		$('#newCandidate').val('')
	}
	
}
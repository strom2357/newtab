window.onload = function(){
    var kaizens = [
        "At the command line, you can search for old commands using <b>ctrl-r</b> then typing the command.<br><br>After typing part of the search term, you can hit <b>ctrl-r</b> again to keep searching<br><br>However you should be careful not to rerun a command that you didn't intend to.",
        "You can use <b>.tap</b> on an object to return self.  Instead of writing:<br><br>def update_param(params)<br><div class='indent1'>params[:foo]='bar'<br>params</div>end<br><br> We can call tap with a block containing the code we want to run.  The object will be yielded to the block and then returned:<br><br>def update_param(params)<br><div class='indent1'>params.tap { |p| p[:foo]='bar'}</div>end<br>"
    ]

    daily_kaizen = kaizens[Math.floor(Math.random() * kaizens.length)];
    el = document.getElementById('kaizen-quote');
    el.innerHTML = daily_kaizen;
}


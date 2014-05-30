#!/bin/bash

cd `dirname $0`

function _list () {
	target="$1"
	index="$target/index.js"
	
	echo 'module.exports = {' > "$index"
	ls -1 "$target" | while read f; do
		if [ "$f" != "index.js" ]; then
			echo "    ${f%.js}: require('./${f%.js}')," >> "$index"
		fi
	done
	perl -e '$f="'"$index"'";$s=-s$f;open$h,"+<$f";truncate$h,$s-2;'
	echo >> "$index"
	echo '};' >> "$index"
	
	ls -1 "$target" | while read f; do
		if [ -d "$target/$f" ]; then
			_list "$target/$f" &
		fi
	done
}

_list "lib/saclient"

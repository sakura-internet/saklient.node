#!/bin/bash

find src/saklient/cloud/enums -name "*.ts" | while read src; do
	c=`echo $src | cut -d/ -f5 | cut -d. -f1`
	target="lib/saklient/cloud/enums/$c.js"
	if ! ( grep '@property' "$target" >/dev/null ); then
		#echo "processing $target"
		tmp=`mktemp -t js`
		grep -B9999 "return $c;" "$target" | sed -e '$d' > "$tmp"
		perl -e '
			$c = 0;
			while (<>) {
				$c=1 if m|^\t\s*/\*\*\s*$|;
				print "    ".substr($_,1) if $c;
				$c=0 if m|^\s*\*/\s*$|;
			}
			' < "$src" >> "$tmp"
		grep -A9999 "return $c;" "$target" >> "$tmp"
		cat "$tmp" > "$target"
		rm -f "$tmp"
	fi
done

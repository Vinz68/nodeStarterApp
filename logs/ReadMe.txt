# Show nodeStarterApp.log
bunyan nodeStarterApp.log

# .. in short notation
bunyan -o short nodeStarterApp.log

# View multiple files
bunyan nodeStarterApp.log [bar.log ...]

# Filter on a unique request id
bunyan -c 'this.reqId=="5b9130bb-1e29-4627-8393-1a98d0d27691"' nodeStarterApp.log

# Filter on an IP
bunyan -c this.reqIp=="::ffff:192.168.178.24" nodeStarterApp.log

# Filter on a certain instance of lognodeStarterAppTest, using the process id (pid)
bunyan nodeStarterApp.log -c 'this.pid=="1482"'

# Filter on ...  user=bob (if we had that in the log file..)
bunyan -c 'this.user=="bob"' nodeStarterApp.log


# ERROR level and above
$ bunyan logTnodeStarterAppest.log -l error

# Watch incoming HTTP requests.
$ tail -f nodeStarterApp.log | bunyan -c 'this.req'

# Watch outgoing HTTP responses
$ tail -f nodeStarterApp.log | bunyan -c 'this.res'

# COMBINE: What server errors in HTTP responses.
$ tail -f nodeStarterApp.log | bunyan -c 'this.res && this.res.statusCode >= 500'



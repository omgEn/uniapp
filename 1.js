// 1.实现字符串拼接
function strJoin(params){
	return params.join('')
}

// 2.过滤min开头或结尾
// ['min-length','fix-min','this-is-min-pro']
function filterStringJoin(params){
	let filterParams = params
	const res = filterParams.map((item)=>item=item.replace(/min.min*?/,''))
	return strJoin(res)
}

var arr = ['min-length','fix-min','this-is-min-pro']
filterStringJoin(arr)

// 3.如何快速查找给定DOM元素最近的符合条件的相邻元素
function findNearesDom(target,selector){
	// 所有相邻元素
	const nodes = target.parentNode.childNodes
	const nodesArr = Array.from(nodes).filter((item)=>item.nodeType===1)
	const index = nodesArr.findIndex((item)=>item===target)
	console.log(index)
	// 相邻节点后面符合条件的node
	let fromNode = null,fromIndex = 0;
	// 相邻节点前面符合条件的node
	let nextNode = null,nextIndex = 0;
	
	for(let i=index;i<nodesArr.length;i++){
		const element = nodesArr[i]
		console.log(i,document.querySelector(selector),document.querySelector(selector)===element)
		
		if(document.querySelector(selector)===element){
			nextIndex = i
			nextNode= element
			console.log('nextNode',nextNode)
			break;
		}
	}
	for(let i=index;i>0;i--){
		const element = nodesArr[i]
		if(document.querySelector(selector)===element){
			fromIndex = i
			fromNode= element
			console.log('fromNode',fromNode)
			break;
		}
	}
	return Math.abs(fromIndex-index)-Math.abs(nextIndex-index)>0?nextNode:fromNode
}

function siblingElements(elem){
	
}

// 4.请实现树形数据结构的模糊匹配，返回符合条件的所有节点（包含子节点）
function filterTreeNode(searchValue){
	const treeData = [
		{
			name: 'node-1',
			children: [
				{
					name: 'node-1-1',
					children: []
				},
				{
					name: 'node-1-2',
					children: []
				}
			]
		}
	]
}
function recurTree(tree,searchValue){
	if(tree.name===searchValue){}
	
}

console.log(33)
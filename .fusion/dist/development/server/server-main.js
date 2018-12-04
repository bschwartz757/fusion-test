if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/bschwa/Documents/sandbox/foosion-test/node_modules/source-map-support/source-map-support.js').install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "e0b3cd5b50db719ca4bb";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fusion-cli/build/loaders/chunk-manifest-loader.js!./":
/*!************************************************************************!*\
  !*** ./node_modules/fusion-cli/build/loaders/chunk-manifest-loader.js ***!
  \************************************************************************/
/*! exports provided: chunks, runtimeChunkId, initialChunkIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunks", function() { return chunks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runtimeChunkId", function() { return runtimeChunkId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialChunkIds", function() { return initialChunkIds; });
const chunks = new Map([["main", __webpack_require__.p + "client-main.js"], ["runtime", __webpack_require__.p + "client-runtime.js"], ["vendor", __webpack_require__.p + "client-vendor.js"]]);
const runtimeChunkId = "runtime";
const initialChunkIds = new Set(["main","vendor"]);

/***/ }),

/***/ "./node_modules/fusion-cli/build/loaders/chunk-url-map-loader.js!./":
/*!***********************************************************************!*\
  !*** ./node_modules/fusion-cli/build/loaders/chunk-url-map-loader.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = new Map(
    [["main",[["es5","client-main.js"]]],["runtime",[["es5","client-runtime.js"]]],["vendor",[["es5","client-vendor.js"]]]].map(entry => { //[number, Map<string,string>]
      entry[1] = new Map(
        entry[1].map(group => {
          group[1] = __webpack_require__.p + group[1];
          return group;
        })
      );
      return entry;
    })
  );

/***/ }),

/***/ "./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./src/Assets/img/coconut.png":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./src/Assets/img/coconut.png ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4c58a19ae37602569ef6bb16bf06dc83.png";

/***/ }),

/***/ "./node_modules/fusion-cli/build/loaders/i18n-manifest-loader.js!./":
/*!***********************************************************************!*\
  !*** ./node_modules/fusion-cli/build/loaders/i18n-manifest-loader.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/fusion-cli/build/loaders/sync-chunk-ids-loader.js!./":
/*!************************************************************************!*\
  !*** ./node_modules/fusion-cli/build/loaders/sync-chunk-ids-loader.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ["runtime","vendor","main"];

/***/ }),

/***/ "./node_modules/fusion-cli/build/server-error.js":
/*!*******************************************************!*\
  !*** ./node_modules/fusion-cli/build/server-error.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-env node */
function renderError(error
/*: any */
= {}) {
  let displayError;

  if (error instanceof Error) {
    displayError = error;
  } else if (typeof error === 'string') {
    displayError = new Error(error);
  } else {
    displayError = new Error(error.message);
    displayError.stack = error.stack;
    displayError.name = error.name;
  }

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Server error</title>
        <style>html {background:red;color:white;line-height:2;}</style>
      </head>
      <body>
        <pre>${displayError.stack.replace(/\[\d\dm/gm, '')}</pre>
      </body>
    </html>
  `;
}

module.exports.renderError = renderError;

/***/ }),

/***/ "./node_modules/fusion-cli/entries/server-entry.js":
/*!*********************************************************!*\
  !*** ./node_modules/fusion-cli/entries/server-entry.js ***!
  \*********************************************************/
/*! exports provided: start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony import */ var _SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER__ */ "./node_modules/fusion-cli/build/loaders/i18n-manifest-loader.js!./");
/* harmony import */ var _SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plugins_critical_chunk_ids_plugin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugins/critical-chunk-ids-plugin.js */ "./node_modules/fusion-cli/plugins/critical-chunk-ids-plugin.js");
/* harmony import */ var _plugins_assets_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugins/assets-plugin */ "./node_modules/fusion-cli/plugins/assets-plugin.js");
/* harmony import */ var _plugins_assets_plugin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_plugins_assets_plugin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plugins_context_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plugins/context-plugin */ "./node_modules/fusion-cli/plugins/context-plugin.js");
/* harmony import */ var _plugins_context_plugin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plugins_context_plugin__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plugins_server_error_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../plugins/server-error-plugin */ "./node_modules/fusion-cli/plugins/server-error-plugin.js");
/* harmony import */ var _plugins_server_error_plugin__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plugins_server_error_plugin__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plugins_ssr_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../plugins/ssr-plugin */ "./node_modules/fusion-cli/plugins/ssr-plugin.js");
/* harmony import */ var _lib_strip_prefix_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/strip-prefix.js */ "./node_modules/fusion-cli/lib/strip-prefix.js");
/* harmony import */ var _lib_strip_prefix_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_strip_prefix_js__WEBPACK_IMPORTED_MODULE_8__);
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */
// $FlowFixMe
 // eslint-disable-line









let prefix = process.env.ROUTE_PREFIX;
let AssetsPlugin; // $FlowFixMe

const main = __webpack_require__(/*! __FRAMEWORK_SHARED_ENTRY__ */ "./src/main.js"); // eslint-disable-line import/no-unresolved, import/no-extraneous-dependencies


let server = null;
const state = {
  serve: null
};
const initialize = main ? main.default || main : () => {
  throw new Error('App should export a function');
};
async function start({
  port,
  dir = '.'
  /*: any */

}) {
  AssetsPlugin = _plugins_assets_plugin__WEBPACK_IMPORTED_MODULE_4___default()(dir); // TODO(#21): support https.createServer(credentials, listener);

  server = http__WEBPACK_IMPORTED_MODULE_1___default.a.createServer();
  await reload();
  server.on('request', (req, res) => {
    if (prefix) _lib_strip_prefix_js__WEBPACK_IMPORTED_MODULE_8___default()(req, prefix); // $FlowFixMe

    state.serve(req, res).catch(e => {
      // $FlowFixMe
      state.app.onerror(e);
    });
  });
  return new Promise(resolve => {
    server && server.listen(port, () => {
      resolve(server);
    });
  });
}

async function reload() {
  const app = await initialize();
  reverseRegister(app, AssetsPlugin);
  reverseRegister(app, _plugins_context_plugin__WEBPACK_IMPORTED_MODULE_5___default.a);
  app.register(fusion_core__WEBPACK_IMPORTED_MODULE_2__["SSRBodyTemplateToken"], _plugins_ssr_plugin__WEBPACK_IMPORTED_MODULE_7__["SSRBodyTemplate"]);
  app.register(fusion_core__WEBPACK_IMPORTED_MODULE_2__["CriticalChunkIdsToken"], _plugins_critical_chunk_ids_plugin_js__WEBPACK_IMPORTED_MODULE_3__["default"]);

  if (prefix) {
    app.register(fusion_core__WEBPACK_IMPORTED_MODULE_2__["RoutePrefixToken"], prefix);
  }

  if (server) {
    app.register(fusion_core__WEBPACK_IMPORTED_MODULE_2__["HttpServerToken"],
    /*#__PURE__*/
    Object(fusion_core__WEBPACK_IMPORTED_MODULE_2__["createPlugin"])({
      provides: () => server
    }));
  }

  if (true) {
    reverseRegister(app, _plugins_server_error_plugin__WEBPACK_IMPORTED_MODULE_6___default.a);
  }

  state.serve = app.callback(); // $FlowFixMe

  state.app = app;
}

function reverseRegister(app, token, plugin) {
  app.register(token, plugin);
  app.plugins.unshift(app.plugins.pop());
} // $FlowFixMe


if (true) {
  // $FlowFixMe
  module.hot.accept(/*! __FRAMEWORK_SHARED_ENTRY__ */ "./src/main.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (reload)(__WEBPACK_OUTDATED_DEPENDENCIES__); }); // $FlowFixMe

  module.hot.accept(/*! __SECRET_BUNDLE_MAP_LOADER__ */ "./node_modules/fusion-cli/build/loaders/chunk-url-map-loader.js!./", function() {  }); // $FlowFixMe

  module.hot.accept(/*! __SECRET_SYNC_CHUNK_IDS_LOADER__ */ "./node_modules/fusion-cli/build/loaders/sync-chunk-ids-loader.js!./", function() {  });
}

/***/ }),

/***/ "./node_modules/fusion-cli/entries/server-public-path.js":
/*!***************************************************************!*\
  !*** ./node_modules/fusion-cli/entries/server-public-path.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */

/*::
declare var __webpack_public_path__: string;
*/


let prefix = load('ROUTE_PREFIX');

if (typeof prefix === 'string') {
  assert__WEBPACK_IMPORTED_MODULE_0___default()(!prefix.endsWith('/'), 'ROUTE_PREFIX must not end with /');
  assert__WEBPACK_IMPORTED_MODULE_0___default()(prefix.startsWith('/'), 'ROUTE_PREFIX must start with /');
}

let cdnUrl = load('CDN_URL');

if (typeof cdnUrl === 'string') {
  assert__WEBPACK_IMPORTED_MODULE_0___default()(!cdnUrl.endsWith('/'), 'CDN_URL must not end with /');
  assert__WEBPACK_IMPORTED_MODULE_0___default()(new url__WEBPACK_IMPORTED_MODULE_1__["URL"](cdnUrl), 'CDN_URL must be valid absolute URL');
}

let assetBasePath = '/_static/';

if (prefix) {
  assetBasePath = prefix + assetBasePath;
} // eslint-disable-next-line


__webpack_require__.p = cdnUrl ? cdnUrl + '/' : assetBasePath;

function load(key) {
  const value = process.env[key];

  if (value === null) {
    return void 0;
  }

  return value;
}

/***/ }),

/***/ "./node_modules/fusion-cli/get-compilation-metadata.js":
/*!*************************************************************!*\
  !*** ./node_modules/fusion-cli/get-compilation-metadata.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-env node */

/*
This is where webpack-related things should be defined
*/
// custom loaders: see build/compiler.js
// $FlowFixMe
const chunkUrlMap = __webpack_require__(/*! __SECRET_BUNDLE_MAP_LOADER__ */ "./node_modules/fusion-cli/build/loaders/chunk-url-map-loader.js!./"); // eslint-disable-line import/no-unresolved, import/no-extraneous-dependencies
// $FlowFixMe


const syncChunks = __webpack_require__(/*! __SECRET_SYNC_CHUNK_IDS_LOADER__ */ "./node_modules/fusion-cli/build/loaders/sync-chunk-ids-loader.js!./"); // eslint-disable-line import/no-unresolved, import/no-extraneous-dependencies


module.exports = () => {
  return {
    syncChunks,
    chunkUrlMap
  };
};

/***/ }),

/***/ "./node_modules/fusion-cli/lib/strip-prefix.js":
/*!*****************************************************!*\
  !*** ./node_modules/fusion-cli/lib/strip-prefix.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-env node */
module.exports = function stripPrefix(req
/*: any */
, prefix
/*: string */
) {
  if (req.url.indexOf(prefix) === 0) {
    req.url = req.url.slice(prefix.length);

    if (req.url === '') {
      req.url = '/';
    }
  }
};

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/assets-plugin.js":
/*!**********************************************************!*\
  !*** ./node_modules/fusion-cli/plugins/assets-plugin.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-env node */
const {
  createPlugin,
  getEnv
} = __webpack_require__(/*! fusion-core */ "fusion-core");

const path = __webpack_require__(/*! path */ "path");

const mount = __webpack_require__(/*! koa-mount */ "koa-mount");

const serve = __webpack_require__(/*! koa-static */ "koa-static");

module.exports = function (dir
/*: string */
) {
  return createPlugin({
    middleware: () => {
      const {
        baseAssetPath,
        env
      } = getEnv(); // setting defer here tells the `serve` middleware to `await next` first before
      // setting the response. This allows composition with user middleware

      return mount(baseAssetPath, serve(path.resolve(dir, `.fusion/dist/${env}/client`), {
        defer: true,
        setHeaders: res => {
          res.setHeader('Cache-Control', 'public, max-age=31536000');
          res.setHeader('Timing-Allow-Origin', '*');
        }
      }));
    }
  });
};

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/context-plugin.js":
/*!***********************************************************!*\
  !*** ./node_modules/fusion-cli/plugins/context-plugin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-env node */

/*
This is where new ctx properties should be initialized
*/
const getCompilationMetaData = __webpack_require__(/*! ../get-compilation-metadata.js */ "./node_modules/fusion-cli/get-compilation-metadata.js");

const {
  createPlugin
} = __webpack_require__(/*! fusion-core */ "fusion-core");

module.exports = createPlugin({
  middleware: () => {
    const compilationMetaData = getCompilationMetaData();
    return function middleware(ctx, next) {
      // webpack-related things
      ctx.syncChunks = compilationMetaData.syncChunks;
      ctx.chunkUrlMap = compilationMetaData.chunkUrlMap;
      return next();
    };
  }
});

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/critical-chunk-ids-plugin.js":
/*!**********************************************************************!*\
  !*** ./node_modules/fusion-cli/plugins/critical-chunk-ids-plugin.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _build_loaders_chunk_manifest_loader_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../build/loaders/chunk-manifest-loader.js */ "./node_modules/fusion-cli/build/loaders/chunk-manifest-loader.js!./");
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-env node */
 // $FlowFixMe

 // eslint-disable-line

/* harmony default export */ __webpack_exports__["default"] = (Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
  provides: () => {
    return {
      from: Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(() => {
        const chunkIds = new Set();

        for (const chunkId of _build_loaders_chunk_manifest_loader_js___WEBPACK_IMPORTED_MODULE_1__["initialChunkIds"]) {
          chunkIds.add(chunkId);
        }

        return new Set();
      })
    };
  }
}));

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/server-error-plugin.js":
/*!****************************************************************!*\
  !*** ./node_modules/fusion-cli/plugins/server-error-plugin.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-env node */
const renderError = __webpack_require__(/*! ../build/server-error */ "./node_modules/fusion-cli/build/server-error.js").renderError;

const {
  createPlugin
} = __webpack_require__(/*! fusion-core */ "fusion-core");

module.exports = createPlugin({
  middleware: () => async function middleware(ctx, next) {
    try {
      await next();
    } catch (err) {
      ctx.status = err.statusCode || err.status || 500;
      ctx.body = renderError(err);
    }
  }
});

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/ssr-plugin.js":
/*!*******************************************************!*\
  !*** ./node_modules/fusion-cli/plugins/ssr-plugin.js ***!
  \*******************************************************/
/*! exports provided: SSRBodyTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SSRBodyTemplate", function() { return SSRBodyTemplate; });
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _build_loaders_chunk_manifest_loader_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../build/loaders/chunk-manifest-loader.js */ "./node_modules/fusion-cli/build/loaders/chunk-manifest-loader.js!./");
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-env node */

/* global __webpack_public_path__ */

/*::
declare var __webpack_public_path__: string;

import type {
  Context,
  SSRBodyTemplate as SSRBodyTemplateService,
} from 'fusion-core';
*/

 // eslint-disable-line

const SSRBodyTemplate = Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
  deps: {
    criticalChunkIds: fusion_core__WEBPACK_IMPORTED_MODULE_0__["CriticalChunkIdsToken"].optional,
    routePrefix: fusion_core__WEBPACK_IMPORTED_MODULE_0__["RoutePrefixToken"].optional
  },
  provides: ({
    criticalChunkIds,
    routePrefix
  }) => {
    return ctx => {
      const {
        htmlAttrs,
        bodyAttrs,
        title,
        head,
        body
      } = ctx.template;
      const safeAttrs = Object.keys(htmlAttrs).map(attrKey => {
        return ` ${Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["escape"])(attrKey)}="${Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["escape"])(htmlAttrs[attrKey])}"`;
      }).join('');
      const safeBodyAttrs = Object.keys(bodyAttrs).map(attrKey => {
        return ` ${Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["escape"])(attrKey)}="${Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["escape"])(bodyAttrs[attrKey])}"`;
      }).join('');
      const safeTitle = Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["escape"])(title); // $FlowFixMe

      const safeHead = head.map(fusion_core__WEBPACK_IMPORTED_MODULE_0__["consumeSanitizedHTML"]).join(''); // $FlowFixMe

      const safeBody = body.map(fusion_core__WEBPACK_IMPORTED_MODULE_0__["consumeSanitizedHTML"]).join('');
      const coreGlobals = [`<script nonce="${ctx.nonce}">`, `window.performance && window.performance.mark && window.performance.mark('firstRenderStart');`, routePrefix && `__ROUTE_PREFIX__ = ${JSON.stringify(routePrefix)};`, `__FUSION_ASSET_PATH__ = ${JSON.stringify(__webpack_require__.p)};`, // consumed in src/entries/client-public-path.js
      `</script>`].filter(Boolean).join('');
      const legacyCriticalChunkIds = ctx.preloadChunks;
      const modernCriticalChunkIds = criticalChunkIds ? criticalChunkIds.from(ctx) : new Set();
      const allCriticalChunkIds = new Set([..._build_loaders_chunk_manifest_loader_js___WEBPACK_IMPORTED_MODULE_1__["initialChunkIds"], // For now, take union of both legacy and modern
      ...legacyCriticalChunkIds, ...modernCriticalChunkIds, // runtime chunk must be last script
      _build_loaders_chunk_manifest_loader_js___WEBPACK_IMPORTED_MODULE_1__["runtimeChunkId"]]);
      const criticalChunkScripts = Array.from(allCriticalChunkIds).map(id => chunkScript(ctx, _build_loaders_chunk_manifest_loader_js___WEBPACK_IMPORTED_MODULE_1__["chunks"].get(id))).join('');
      return ['<!doctype html>', `<html${safeAttrs}>`, `<head>`, `<meta charset="utf-8" />`, `<title>${safeTitle}</title>`, `${coreGlobals}${criticalChunkScripts}${safeHead}`, `</head>`, `<body${safeBodyAttrs}>${ctx.rendered}${safeBody}</body>`, '</html>'].join('');
    };
  }
});


function chunkScript(ctx, url) {
  // cross origin is needed to get meaningful errors in window.onerror
  const crossOrigin = url.startsWith('https://') ? ' crossorigin="anonymous"' : '';
  return `<script defer src="${url}" nonce="${ctx.nonce}"${crossOrigin}></script>`;
}

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!*****************************************!*\
  !*** (webpack)/hot/log-apply-result.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function (updatedModules, renewedModules) {
  var unacceptedModules = updatedModules.filter(function (moduleId) {
    return renewedModules && renewedModules.indexOf(moduleId) < 0;
  });

  var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

  if (unacceptedModules.length > 0) {
    log("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
    unacceptedModules.forEach(function (moduleId) {
      log("warning", "[HMR]  - " + moduleId);
    });
  }

  if (!renewedModules || renewedModules.length === 0) {
    log("info", "[HMR] Nothing hot updated.");
  } else {
    log("info", "[HMR] Updated modules:");
    renewedModules.forEach(function (moduleId) {
      if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
        var parts = moduleId.split("!");
        log.groupCollapsed("info", "[HMR]  - " + parts.pop());
        log("info", "[HMR]  - " + moduleId);
        log.groupEnd("info");
      } else {
        log("info", "[HMR]  - " + moduleId);
      }
    });
    var numberIds = renewedModules.every(function (moduleId) {
      return typeof moduleId === "number";
    });
    if (numberIds) log("info", "[HMR] Consider using the NamedModulesPlugin for module names.");
  }
};

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!****************************!*\
  !*** (webpack)/hot/log.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
  var shouldLog = logLevel === "info" && level === "info" || ["info", "warning"].indexOf(logLevel) >= 0 && level === "warning" || ["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error";
  return shouldLog;
}

function logGroup(logFn) {
  return function (level, msg) {
    if (shouldLog(level)) {
      logFn(msg);
    }
  };
}

module.exports = function (level, msg) {
  if (shouldLog(level)) {
    if (level === "info") {
      console.log(msg);
    } else if (level === "warning") {
      console.warn(msg);
    } else if (level === "error") {
      console.error(msg);
    }
  }
};
/* eslint-disable node/no-unsupported-features/node-builtins */


var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);
module.exports.groupCollapsed = logGroup(groupCollapsed);
module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function (level) {
  logLevel = level;
};

/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?1000":
/*!**********************************!*\
  !*** (webpack)/hot/poll.js?1000 ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

/*globals __resourceQuery */
if (true) {
  var hotPollInterval = +__resourceQuery.substr(1) || 10 * 60 * 1000;

  var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

  var checkForUpdate = function checkForUpdate(fromUpdate) {
    if (module.hot.status() === "idle") {
      module.hot.check(true).then(function (updatedModules) {
        if (!updatedModules) {
          if (fromUpdate) log("info", "[HMR] Update applied.");
          return;
        }

        __webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);

        checkForUpdate(true);
      }).catch(function (err) {
        var status = module.hot.status();

        if (["abort", "fail"].indexOf(status) >= 0) {
          log("warning", "[HMR] Cannot apply update.");
          log("warning", "[HMR] " + (err.stack || err.message));
          log("warning", "[HMR] You need to restart the application!");
        } else {
          log("warning", "[HMR] Update failed: " + (err.stack || err.message));
        }
      });
    }
  };

  setInterval(checkForUpdate, hotPollInterval);
} else {}
/* WEBPACK VAR INJECTION */}.call(this, "?1000"))

/***/ }),

/***/ "./src/Actions/Increment.js":
/*!**********************************!*\
  !*** ./src/Actions/Increment.js ***!
  \**********************************/
/*! exports provided: increment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
function increment(amount) {
  return {
    type: 'INCREMENT',
    amount
  };
}



/***/ }),

/***/ "./src/Components/Alert.js":
/*!*********************************!*\
  !*** ./src/Components/Alert.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui/notification */ "baseui/notification");
/* harmony import */ var baseui_notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baseui_notification__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bschwa/Documents/sandbox/foosion-test/src/Components/Alert.js";



const Alert = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_notification__WEBPACK_IMPORTED_MODULE_1__["Notification"], {
    kind: baseui_notification__WEBPACK_IMPORTED_MODULE_1__["KIND"].warning,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "This is a warning!!");
};

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

/***/ "./src/Components/Card.js":
/*!********************************!*\
  !*** ./src/Components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui/card */ "baseui/card");
/* harmony import */ var baseui_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baseui_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baseui/button */ "baseui/button");
/* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baseui_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Actions_Increment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Actions/Increment.js */ "./src/Actions/Increment.js");
var _jsxFileName = "/Users/bschwa/Documents/sandbox/foosion-test/src/Components/Card.js";






const CardButton = ({
  increment,
  counter
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Sample Redux Counter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Current Count: ", counter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
  onClick: () => increment(1),
  kind: baseui_button__WEBPACK_IMPORTED_MODULE_2__["KIND"].success,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Increment by one"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
  onClick: () => increment(2),
  kind: baseui_button__WEBPACK_IMPORTED_MODULE_2__["KIND"].danger,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Increment by two"));

const CardComponent = props => {
  const {
    increment,
    counter
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_card__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    action: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardButton, {
      increment: increment,
      counter: counter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }),
    counter: counter,
    title: "Card title goes here",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("withThemeHOC", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, props.children));
};

const mapStateToProps = state => {
  console.log('mapStateToProps: ', state);
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = {
  increment: _Actions_Increment_js__WEBPACK_IMPORTED_MODULE_4__["increment"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(CardComponent));

/***/ }),

/***/ "./src/Components/Heading.js":
/*!***********************************!*\
  !*** ./src/Components/Heading.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bschwa/Documents/sandbox/foosion-test/src/Components/Heading.js";


const H1 = Object(baseui__WEBPACK_IMPORTED_MODULE_1__["styled"])('h1', {
  margin: '1.25rem 0'
});

const Heading = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H1, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, props.message);

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./src/Layout/Section.js":
/*!*******************************!*\
  !*** ./src/Layout/Section.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Card */ "./src/Components/Card.js");
/* harmony import */ var _Components_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Heading */ "./src/Components/Heading.js");
/* harmony import */ var _Components_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Alert */ "./src/Components/Alert.js");
var _jsxFileName = "/Users/bschwa/Documents/sandbox/foosion-test/src/Layout/Section.js";





const SectionElement = Object(baseui__WEBPACK_IMPORTED_MODULE_1__["styled"])('section', {
  height: 'auto',
  padding: '1.25rem',
  backgroundColor: '#fff',
  border: '1px solid lightGray'
});

const Section = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionElement, {
    style: {
      gridArea: 'section'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    message: props.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Here are some things you might want to take a look at"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Alert__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./src/Layout/Shared/Container.js":
/*!****************************************!*\
  !*** ./src/Layout/Shared/Container.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content */ "./src/Layout/Shared/Content.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/Layout/Shared/Header.js");
var _jsxFileName = "/Users/bschwa/Documents/sandbox/foosion-test/src/Layout/Shared/Container.js";




 // import Footer from './Footer'

const Wrapper = Object(baseui__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  display: 'grid',
  gridTemplateColumns: '100%',
  gridTemplateRows: '5rem auto',
  gridGap: '1.25rem',
  height: '100vh',
  gridTemplateAreas: `
			"header"
			"content"
		`
});

class Container extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
      theme: baseui__WEBPACK_IMPORTED_MODULE_1__["LightTheme"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, `
        html,body,#root{height:100%;}
        html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}
        body{margin:0;}
        button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}
        input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}
        `), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/Layout/Shared/Content.js":
/*!**************************************!*\
  !*** ./src/Layout/Shared/Content.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/home.js */ "./src/pages/home.js");
/* harmony import */ var _pages_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/service.js */ "./src/pages/service.js");
/* harmony import */ var _pages_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/project.js */ "./src/pages/project.js");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/bschwa/Documents/sandbox/foosion-test/src/Layout/Shared/Content.js";




 // import PageNotFound from '../pages/pageNotFound.js';


const ContentContainer = Object(baseui__WEBPACK_IMPORTED_MODULE_5__["styled"])('main', {
  display: 'grid',
  gridTemplateColumns: '0 1fr 3fr 0',
  gridTemplateRows: '1fr',
  gridGap: '1.25rem',
  gridTemplateAreas: `
		". sidebar section ."
	`
});

class Content extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentContainer, {
      style: {
        gridArea: 'content'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/",
      component: _pages_home_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/project",
      component: _pages_project_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/service",
      component: _pages_service_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./src/Layout/Shared/Header.js":
/*!*************************************!*\
  !*** ./src/Layout/Shared/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var baseui_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! baseui/avatar */ "baseui/avatar");
/* harmony import */ var baseui_avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(baseui_avatar__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/bschwa/Documents/sandbox/foosion-test/src/Layout/Shared/Header.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const HeaderElement = Object(baseui__WEBPACK_IMPORTED_MODULE_3__["styled"])('header', {
  display: 'grid',
  gridTemplateColumns: '1fr 3fr 1fr',
  gridTemplateRows: '1fr',
  height: 'auto',
  backgroundColor: 'black',
  gridTemplateAreas: `
			"brand . nav"
		`
});
const Brand = Object(baseui__WEBPACK_IMPORTED_MODULE_3__["styled"])('div', {
  height: 'auto',
  color: '#fff'
});
const Nav = Object(baseui__WEBPACK_IMPORTED_MODULE_3__["styled"])('nav', {
  height: 'auto'
});
const StyledUl = Object(baseui__WEBPACK_IMPORTED_MODULE_3__["styled"])('ul', {
  listStyleType: 'none',
  margin: '0',
  padding: '0'
});
const Centered = Object(baseui__WEBPACK_IMPORTED_MODULE_3__["styled"])('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  fontSize: '1.5rem'
});
const StyledLink = Object(baseui__WEBPACK_IMPORTED_MODULE_3__["styled"])('li', {
  display: 'inline',
  width: '20%',
  paddingLeft: '2rem'
});
const linkStyle = {
  textDecoration: 'none',
  color: 'white'
};

class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderElement, {
      style: {
        gridArea: 'header'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Centered, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Brand, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_avatar__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
      name: "Logo",
      size: "scale1000",
      src: Object(fusion_core__WEBPACK_IMPORTED_MODULE_2__["assetUrl"])(__webpack_require__(/*! __SECRET_FILE_LOADER__?assetUrl=true!../../Assets/img/coconut.png */ "./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./src/Assets/img/coconut.png")),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), " COCONUT")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, {
      style: {
        gridArea: 'nav'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Centered, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledUl, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/",
      style: linkStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/project",
      style: linkStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Project")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/service",
      style: linkStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Service"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/Layout/Sidebar.js":
/*!*******************************!*\
  !*** ./src/Layout/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var baseui_icon_chevron_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baseui/icon/chevron-right */ "baseui/icon/chevron-right");
/* harmony import */ var baseui_icon_chevron_right__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baseui_icon_chevron_right__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Heading */ "./src/Components/Heading.js");
var _jsxFileName = "/Users/bschwa/Documents/sandbox/foosion-test/src/Layout/Sidebar.js";




const Aside = Object(baseui__WEBPACK_IMPORTED_MODULE_1__["styled"])('aside', {
  height: 'auto',
  padding: '1rem',
  backgroundColor: '#fff',
  border: '1px solid lightGray'
});
const StyledUl = Object(baseui__WEBPACK_IMPORTED_MODULE_1__["styled"])('ul', {
  listStyleType: 'none',
  margin: '0',
  padding: '0'
});
const StyledLink = Object(baseui__WEBPACK_IMPORTED_MODULE_1__["styled"])('li', {
  width: 'auto',
  height: 'auto',
  lineHeight: 1.5
});

const Sidebar = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Aside, {
    style: {
      gridArea: 'sidebar'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    message: props.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledUl, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "First Project", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_icon_chevron_right__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Second Project", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_icon_chevron_right__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/Reducers/Counter.js":
/*!*********************************!*\
  !*** ./src/Reducers/Counter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function incrementReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.amount;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (incrementReducer);

/***/ }),

/***/ "./src/initialState.js":
/*!*****************************!*\
  !*** ./src/initialState.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getInitialState; });
function getInitialState(ctx) {
  console.log('getInitialState: ', ctx);
  return {
    counter: 0
  };
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-react */ "fusion-react");
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fusion_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-tokens */ "fusion-tokens");
/* harmony import */ var fusion_tokens__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_tokens__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fusion-plugin-react-redux */ "fusion-plugin-react-redux");
/* harmony import */ var fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fusion_plugin_redux_action_emitter_enhancer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fusion-plugin-redux-action-emitter-enhancer */ "fusion-plugin-redux-action-emitter-enhancer");
/* harmony import */ var fusion_plugin_redux_action_emitter_enhancer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_redux_action_emitter_enhancer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fusion_plugin_universal_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fusion-plugin-universal-events */ "fusion-plugin-universal-events");
/* harmony import */ var fusion_plugin_universal_events__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_universal_events__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _initialState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initialState.js */ "./src/initialState.js");
/* harmony import */ var _Reducers_Counter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Reducers/Counter */ "./src/Reducers/Counter.js");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fusion-plugin-react-router */ "fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "fusion-plugin-styletron-react");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./root.js */ "./src/root.js");











/* harmony default export */ __webpack_exports__["default"] = (() => {
  const app = new fusion_react__WEBPACK_IMPORTED_MODULE_1___default.a(_root_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
  app.register(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_9___default.a);
  app.register(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_8___default.a); // app.register(UniversalEventsToken, UniversalEvents);

  app.register(fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_3__["ReduxToken"], fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_3___default.a); // app.register(EnhancerToken, ReduxActionEmitterEnhancer);
  // __BROWSER__ && app.register(FetchToken, fetch);
  // __NODE__ && app.register(GetInitialStateToken, getInitialState);
  // app.register(PreloadedStateToken, { counter: 0 });

  const reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    counter: _Reducers_Counter__WEBPACK_IMPORTED_MODULE_7__["default"]
  });
  app.register(fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_3__["ReducerToken"], reducer);
  return app;
});

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout/Sidebar */ "./src/Layout/Sidebar.js");
/* harmony import */ var _Layout_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/Section */ "./src/Layout/Section.js");
var _jsxFileName = "/Users/bschwa/Documents/sandbox/foosion-test/src/pages/home.js";




const Home = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
  heading: "My Projects",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
  heading: "Hello, Foobob!",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/project.js":
/*!******************************!*\
  !*** ./src/pages/project.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout/Sidebar */ "./src/Layout/Sidebar.js");
/* harmony import */ var _Layout_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/Section */ "./src/Layout/Section.js");
var _jsxFileName = "/Users/bschwa/Documents/sandbox/foosion-test/src/pages/project.js";




const Home = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
  heading: "My Projects",
  style: {
    gridArea: 'sidebar'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
  heading: "This is the Project Page",
  style: {
    gridArea: 'section'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/service.js":
/*!******************************!*\
  !*** ./src/pages/service.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout/Sidebar */ "./src/Layout/Sidebar.js");
/* harmony import */ var _Layout_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/Section */ "./src/Layout/Section.js");
var _jsxFileName = "/Users/bschwa/Documents/sandbox/foosion-test/src/pages/service.js";




const Service = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    heading: "My Projects",
    style: {
      gridArea: 'sidebar'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    heading: "This is the Service Page",
    style: {
      gridArea: 'section'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ }),

/***/ "./src/root.js":
/*!*********************!*\
  !*** ./src/root.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_Shared_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout/Shared/Container */ "./src/Layout/Shared/Container.js");
var _jsxFileName = "/Users/bschwa/Documents/sandbox/foosion-test/src/root.js";


const root = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout_Shared_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
});
/* harmony default export */ __webpack_exports__["default"] = (root);

/***/ }),

/***/ 0:
/*!**************************************************************************************************************************************************!*\
  !*** multi ./node_modules/fusion-cli/entries/server-public-path.js (webpack)/hot/poll.js?1000 ./node_modules/fusion-cli/entries/server-entry.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-cli/entries/server-public-path.js */"./node_modules/fusion-cli/entries/server-public-path.js");
__webpack_require__(/*! /Users/bschwa/Documents/sandbox/foosion-test/node_modules/webpack/hot/poll.js?1000 */"./node_modules/webpack/hot/poll.js?1000");
module.exports = __webpack_require__(/*! /Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-cli/entries/server-entry.js */"./node_modules/fusion-cli/entries/server-entry.js");


/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "baseui":
/*!********************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/baseui/index.js" ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/baseui/index.js");

/***/ }),

/***/ "baseui/avatar":
/*!***************************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/baseui/avatar/index.js" ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/baseui/avatar/index.js");

/***/ }),

/***/ "baseui/button":
/*!***************************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/baseui/button/index.js" ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/baseui/button/index.js");

/***/ }),

/***/ "baseui/card":
/*!*************************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/baseui/card/index.js" ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/baseui/card/index.js");

/***/ }),

/***/ "baseui/icon/chevron-right":
/*!*********************************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/baseui/icon/chevron-right.js" ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/baseui/icon/chevron-right.js");

/***/ }),

/***/ "baseui/notification":
/*!*********************************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/baseui/notification/index.js" ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/baseui/notification/index.js");

/***/ }),

/***/ "fusion-core":
/*!******************************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-core/dist/index.js" ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-core/dist/index.js");

/***/ }),

/***/ "fusion-plugin-react-redux":
/*!********************************************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-plugin-react-redux/dist/index.js" ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-plugin-react-redux/dist/index.js");

/***/ }),

/***/ "fusion-plugin-react-router":
/*!*********************************************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-plugin-react-router/dist/index.js" ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-plugin-react-router/dist/index.js");

/***/ }),

/***/ "fusion-plugin-redux-action-emitter-enhancer":
/*!**************************************************************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-plugin-redux-action-emitter-enhancer/dist/index.js" ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-plugin-redux-action-emitter-enhancer/dist/index.js");

/***/ }),

/***/ "fusion-plugin-styletron-react":
/*!************************************************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-plugin-styletron-react/dist/index.js" ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-plugin-styletron-react/dist/index.js");

/***/ }),

/***/ "fusion-plugin-universal-events":
/*!*************************************************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-plugin-universal-events/dist/index.js" ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-plugin-universal-events/dist/index.js");

/***/ }),

/***/ "fusion-react":
/*!*******************************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-react/dist/index.js" ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-react/dist/index.js");

/***/ }),

/***/ "fusion-tokens":
/*!********************************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-tokens/dist/index.js" ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/fusion-tokens/dist/index.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "koa-mount":
/*!***********************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/koa-mount/index.js" ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/koa-mount/index.js");

/***/ }),

/***/ "koa-static":
/*!************************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/koa-static/index.js" ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/koa-static/index.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!*******************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/react/index.js" ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/react/index.js");

/***/ }),

/***/ "react-redux":
/*!*****************************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/react-redux/lib/index.js" ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/react-redux/lib/index.js");

/***/ }),

/***/ "redux":
/*!***********************************************************************************************!*\
  !*** external "/Users/bschwa/Documents/sandbox/foosion-test/node_modules/redux/lib/redux.js" ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/bschwa/Documents/sandbox/foosion-test/node_modules/redux/lib/redux.js");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=server-main.js.map
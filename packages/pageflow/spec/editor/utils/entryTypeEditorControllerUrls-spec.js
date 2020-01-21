import {entryTypeEditorControllerUrls} from 'pageflow/editor';
import {editor} from 'editor/base';
import Backbone from 'backbone';
import * as support from '$support';

describe('entryTypeEditorControllerUrls', () => {
  support.setupGlobals({
    entry: () => support.factories.entry({id: 10})
  });

  describe('.forModel', () => {
    it('returns mixin that defines urlRoot method for entry type editor controller', () => {
      editor.registerEntryType('test', {});
      const Model = Backbone.Model.extend({
        mixins: [entryTypeEditorControllerUrls.forModel({resources: 'items'})]
      });

      expect(new Model({id: 4}).url()).toBe('/editor/entries/10/test/items/4')
    });

    it('uses url of parent collection for new models', () => {
      editor.registerEntryType('test', {});
      const Model = Backbone.Model.extend({
        mixins: [entryTypeEditorControllerUrls.forModel({resources: 'items'})]
      });
      const model = new Model();
      model.collection = {url() { return '/parent'; }};

      expect(model.url()).toBe('/parent')
    });
  });

  describe('.forCollection', () => {
    it('returns mixin that defines url method for entry type editor controller', () => {
      editor.registerEntryType('test', {});
      const Collection = Backbone.Collection.extend({
        mixins: [entryTypeEditorControllerUrls.forCollection({resources: 'items'})]
      });

      expect(new Collection().url()).toBe('/editor/entries/10/test/items')
    });
  });
});
